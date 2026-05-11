import { ArrowRight, Edit2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { handleFirestoreError, OperationType } from "../../utils/firestoreErrorHandler";
import { isAdminEmail } from "../../utils/admin";
import { format } from "date-fns";

export default function JournalEntries() {
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setIsAdmin(isAdminEmail(user?.email));
    });

    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEntries(postsData);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, "posts");
      setLoading(false);
    });

    return () => {
      unsubAuth();
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="py-12 flex justify-center">
        <div className="w-8 h-8 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12">
      {entries.length === 0 ? (
        <div className="text-center text-gray-500 font-sans italic py-10">
          Chưa có bài viết nào được đăng.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
          {entries.map((post, index) => (
            <div 
              key={post.id} 
              className={`relative bg-white p-4 md:p-6 shadow-xl transition-transform duration-300 hover:scale-105 hover:z-10 ${post.rotation || ""}`}
              style={{
                border: "1.5px dashed #ccc",
                borderRadius: "4px",
              }}
            >
              {/* Washi Tape */}
              <div 
                className={`absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 opacity-80 backdrop-blur-sm -rotate-2 ${post.tapeColor || "bg-brand-orange/40"}`}
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)"
                }}
              ></div>

              {/* Paperclip alternative (conditionally render if you want variety) */}
              {index % 2 === 0 && (
                <svg className="absolute -top-6 -right-2 w-12 h-12 text-gray-400 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.818 8.818 6.364 6.364" />
                </svg>
              )}
              {index % 2 === 0 && (
                  <div className="absolute -top-5 -left-3 transform -rotate-12">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                    </svg>
                  </div>
              )}

              {/* Polaroid Image */}
              <div className="bg-neutral-100 mb-4 h-48 w-full border border-neutral-200 p-2 handdrawn-border-2 relative group-hover:border-brand-orange transition-colors">
                {isAdmin && (
                  <Link 
                    to={`/admin/post/${post.id}`} 
                    className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-md text-gray-700 hover:text-brand-orange hover:bg-white z-20 backdrop-blur-sm transition-all"
                    title="Chỉnh sửa bài viết"
                  >
                    <Edit2 className="w-4 h-4" />
                  </Link>
                )}
                {post.thumbnailUrl ? (
                  <img src={post.thumbnailUrl} alt={post.title} loading="lazy" width="400" height="200" className="w-full h-full object-cover transition-all duration-500 rounded-sm" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-neutral-400 font-hand text-2xl">
                    No Photo
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mb-3 border-b border-dashed border-neutral-300 pb-2">
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest bg-brand-orange/10 px-2 py-1 rounded">
                  {post.cat || "Bài viết"}
                </span>
                <span className="font-hand text-xl text-neutral-600 font-bold transform -rotate-2">
                  {post.createdAt ? format(post.createdAt.toDate(), 'dd/MM/yyyy') : ""}
                </span>
              </div>
              
              <h4 style={{ fontFamily: "var(--font-pattaya)" }} className="text-2xl font-bold mb-3 text-brand-dark leading-tight mt-2 min-h-[60px] line-clamp-2">
                {post.title}
              </h4>
              
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-sans line-clamp-3">
                {post.excerpt}
              </p>
              
              <Link to={`/journal/${post.id}`} aria-label={`Xem chi tiết nhật ký: ${post.title}`} className="inline-flex items-center text-sm font-bold border-b border-brand-dark pb-0.5 hover:text-brand-orange hover:border-brand-orange transition-colors uppercase tracking-widest mt-auto">
                <span className="mr-2">Xem chi tiết</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
