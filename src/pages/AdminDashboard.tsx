import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { isAdminEmail } from '../utils/admin';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Plus, Edit2, Trash2, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!isAdminEmail(user?.email)) return;

    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'posts');
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const handleDeleteClick = (id: string) => {
    setDeleteConfirmId(id);
  };

  const confirmDelete = async () => {
    if (!deleteConfirmId) return;
    try {
      await deleteDoc(doc(db, 'posts', deleteConfirmId));
      setDeleteConfirmId(null);
    } catch (error: any) {
      console.error("Delete error:", error);
      setErrorMsg('Lỗi: ' + (error.message || 'Không thể xóa bài viết'));
      handleFirestoreError(error, OperationType.DELETE, `posts/${deleteConfirmId}`);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Đang tải...</div>;
  }

  if (!isAdminEmail(user?.email)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-sm md:border md:border-gray-200">
          <h1 className="text-2xl font-bold text-center mb-6">DOERS Admin CMS</h1>
          {user ? (
            <div className="text-center text-red-500 mb-4">
              Tài khoản {user.email} không có quyền truy cập. 
              <br/>
              <button 
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Đăng xuất để thử lại
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-orange hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange"
            >
              Đăng nhập bằng Google
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Quản lý bài viết</h1>
        <div className="flex space-x-4 items-center">
          <span className="text-gray-600 hidden md:inline">{user.email}</span>
          <button 
            onClick={handleLogout}
            className="flex items-center text-gray-500 hover:text-gray-800"
            title="Đăng xuất"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded mb-6 flex justify-between items-center">
          <span>{errorMsg}</span>
          <button onClick={() => setErrorMsg(null)} className="text-red-500 hover:text-red-700 font-bold">&times;</button>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <h2 className="text-lg font-semibold">Tất cả bài viết ({posts.length})</h2>
          <Link 
            to="/admin/post/new"
            className="flex items-center bg-brand-dark text-white px-4 py-2 rounded font-medium hover:bg-gray-800 transition"
          >
            <Plus className="w-4 h-4 mr-2" />
            Viết bài mới
          </Link>
        </div>
        
        {posts.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            Chưa có bài viết nào. Hãy thêm vài bài để hiển thị ở đây!
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {posts.map(post => (
              <li key={post.id} className="p-4 hover:bg-gray-50 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <img 
                      src={post.thumbnailUrl || 'https://via.placeholder.com/150'} 
                      alt=""
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 leading-tight block">
                        <Link to={`/admin/post/${post.id}`} className="hover:text-brand-orange">
                          {post.title}
                        </Link>
                      </h3>
                      <div className="mt-1 flex items-center space-x-3 text-sm text-gray-500">
                        <span className="uppercase text-xs tracking-wider font-bold text-brand-orange">{post.cat || 'Chưa phân loại'}</span>
                        <span>•</span>
                        <span>{format(new Date(post.createdAt?.toDate() || Date.now()), 'dd/MM/yyyy HH:mm')}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link 
                      to={`/admin/post/${post.id}`}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded transition"
                      aria-label="Sửa bài viết"
                    >
                      <Edit2 className="w-5 h-5" />
                    </Link>
                    <button 
                      onClick={() => handleDeleteClick(post.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition"
                      aria-label="Xóa bài viết"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-bold mb-4">Xác nhận xóa</h3>
            <p className="text-gray-600 mb-6">Bạn có chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác.</p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition"
              >
                Hủy
              </button>
              <button 
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Xóa bài viết
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
