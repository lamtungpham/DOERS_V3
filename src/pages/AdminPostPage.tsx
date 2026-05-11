import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage, auth } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged, User } from 'firebase/auth';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { isAdminEmail } from '../utils/admin';
import { PostForm } from '../components/admin/PostForm';
import { ArrowLeft } from 'lucide-react';

export default function AdminPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    cat: 'Thực thi',
    excerpt: '',
    thumbnailUrl: '',
    content: ''
  });

  const categories = ["Chiến lược", "Thực thi", "Tư duy", "Công cụ", "Kế hoạch", "Phản hồi"];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!isAdminEmail(currentUser?.email)) {
        navigate('/admin');
      } else {
        if (id) {
          fetchPost();
        } else {
          setLoading(false);
        }
      }
    });
    return () => unsubscribe();
  }, [id, navigate]);

  const fetchPost = async () => {
    if (!id) return;
    try {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData({
          title: data.title || '',
          cat: data.cat || 'Thực thi',
          excerpt: data.excerpt || '',
          thumbnailUrl: data.thumbnailUrl || '',
          content: data.content || ''
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, `posts/${id}`);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (html: string) => {
    setFormData(prev => ({ ...prev, content: html }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    const storageRef = ref(storage, `thumbnails/${Date.now()}_${file.name}`);
    
    setUploadingImage(true);
    try {
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Progress
        }, 
        (error) => {
           console.error("Upload error", error);
           setErrorMsg("Lỗi khi tải ảnh lên. Có thể do phân quyền Storage.");
           setUploadingImage(false);
        }, 
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setFormData(prev => ({ ...prev, thumbnailUrl: downloadURL }));
          setUploadingImage(false);
        }
      );
    } catch (error) {
      console.error(error);
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      setErrorMsg("Tiêu đề và Nội dung là bắt buộc!");
      return;
    }
    
    setSaving(true);
    setErrorMsg(null);
    try {
      const postData = {
        title: formData.title,
        cat: formData.cat,
        excerpt: formData.excerpt,
        thumbnailUrl: formData.thumbnailUrl,
        content: formData.content,
        tapeColor: "bg-brand-orange/40", // Default random values for design
        rotation: ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-3", "-rotate-3"][Math.floor(Math.random()*6)],
      };

      const savePromise = id 
        ? updateDoc(doc(db, 'posts', id), { ...postData, updatedAt: serverTimestamp() })
        : addDoc(collection(db, 'posts'), { ...postData, createdAt: serverTimestamp() });

      // Add a 10-second timeout to the Promise
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Yêu cầu hết thời gian. Vui lòng kiểm tra lại kết nối mạng hoặc cấu hình Firebase.')), 10000)
      );

      await Promise.race([savePromise, timeoutPromise]);
      navigate('/admin');
    } catch (error: any) {
      console.error("Save error:", error);
      setErrorMsg('Lỗi: ' + (error.message || 'Không thể lưu bài viết'));
      handleFirestoreError(error, id ? OperationType.UPDATE : OperationType.CREATE, id ? `posts/${id}` : 'posts');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Đang tải...</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-6 flex items-center space-x-4">
        <Link to="/admin" className="text-gray-500 hover:text-brand-orange transition flex items-center">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Quay lại
        </Link>
        <h1 className="text-2xl font-bold border-l pl-4 border-gray-300">
          {id ? 'Chỉnh sửa bài viết' : 'Viết bài mới'}
        </h1>
      </div>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-6 flex justify-between items-center">
          <span>{errorMsg}</span>
          <button onClick={() => setErrorMsg(null)} className="text-red-500 hover:text-red-700 font-bold">&times;</button>
        </div>
      )}

      <PostForm 
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        handleContentChange={handleContentChange}
        handleImageUpload={handleImageUpload}
        handleSubmit={handleSubmit}
        saving={saving}
        uploadingImage={uploadingImage}
        isEditMode={!!id}
        categories={categories}
      />
    </div>
  );
}
