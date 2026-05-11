import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { format } from 'date-fns';
import { ArrowLeft, Edit2 } from 'lucide-react';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { isAdminEmail } from '../utils/admin';

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setIsAdmin(isAdminEmail(user?.email));
    });

    const fetchPost = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          setPost(null);
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `posts/${id}`);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();

    return () => unsubAuth();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 font-pattaya">Không tìm thấy bài viết!</h1>
        <p className="text-gray-600 mb-8 max-w-md">Bài viết này có thể đã bị xóa hoặc đường dẫn không chính xác.</p>
        <Link to="/journal" className="bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
          Quay lại Nhật ký
        </Link>
      </div>
    );
  }

  return (
    <article className="py-20 min-h-screen bg-surface">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <Link to="/journal" className="inline-flex items-center text-gray-500 hover:text-brand-orange font-medium transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Quay lại
          </Link>
          {isAdmin && (
            <Link 
              to={`/admin/post/${post.id}`} 
              className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-md text-sm font-bold transition-colors"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Sửa bài viết
            </Link>
          )}
        </div>

        {post.cat && (
          <div className="mb-4">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest bg-brand-orange/10 px-3 py-1 rounded-full">
              {post.cat}
            </span>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6" style={{ fontFamily: "var(--font-pattaya)" }}>
          {post.title}
        </h1>

        <div className="flex items-center text-gray-500 font-sans mb-10 pb-10 border-b border-gray-200">
          <span className="font-hand text-2xl transform -rotate-2 inline-block">
            {post.createdAt ? format(post.createdAt.toDate(), 'dd/MM/yyyy • HH:mm') : ""}
          </span>
        </div>

        {post.thumbnailUrl && (
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img 
              src={post.thumbnailUrl} 
              alt={post.title}
              className="w-full h-auto object-cover rounded"
              style={{ maxHeight: '600px' }}
            />
          </div>
        )}

        {post.excerpt && (
          <div className="bg-orange-50 border-l-4 border-brand-orange p-6 mb-12 rounded-r-lg italic text-gray-700 text-lg md:text-xl font-medium">
            {post.excerpt}
          </div>
        )}

        <div 
          className="prose prose-lg md:prose-xl lg:prose-2xl text-gray-800 font-sans max-w-none prose-headings:font-pattaya prose-a:text-brand-orange prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-20 pt-10 border-t border-gray-200 flex justify-center">
          <div className="w-16 h-1 bg-brand-orange rounded-full"></div>
        </div>
      </div>
    </article>
  );
}
