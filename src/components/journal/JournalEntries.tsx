import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const entries = [
  {
    id: 1,
    cat: "Chiến lược",
    date: "24 Thg 10, 2024",
    title: "Kiến tạo Động lực: Xây dựng Hệ thống",
    excerpt: "Vì sao chỉ dựa vào ý chí là một chiến lược thất bại đối với những người có thành tích cao.",
    rotation: "-rotate-2",
    tapeColor: "bg-brand-orange/40",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    cat: "Thực thi",
    date: "18 Thg 10, 2024",
    title: "Loại bỏ Lực cản khi Bắt đầu",
    excerpt: "Cách tiếp cận tối giản (brutalist) trong thiết kế không gian làm việc. Nếu nó không phục vụ cho nhiệm vụ ngay lập tức, nó sẽ bị loại bỏ.",
    rotation: "rotate-3",
    tapeColor: "bg-brand-purple/40",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    cat: "Tư duy",
    date: "12 Thg 10, 2024",
    title: "Giá trị của Không gian trống",
    excerpt: "Tại sao việc lên lịch cho sự trống rỗng hoàn toàn lại là hành động quyết liệt nhất mà bạn có thể thực hiện.",
    rotation: "-rotate-1",
    tapeColor: "bg-brand-lime",
    image: "https://noithatlongthanh.vn/upload1/images/phong-cach-song-xanh.JPG?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    cat: "Công cụ",
    date: "05 Thg 10, 2024",
    title: "Kiểm toán: Kho Công nghệ Tối giản",
    excerpt: "Một sự phân tích thẳng thắn về các phần mềm chúng tôi thực sự sử dụng so với những gì đã loại bỏ.",
    rotation: "rotate-2",
    tapeColor: "bg-brand-orange/40",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    cat: "Kế hoạch",
    date: "28 Thg 9, 2024",
    title: "Mục tiêu Quý 4: Tập trung cốt lõi",
    excerpt: "Chúng tôi đang thu hẹp phạm vi để tăng cường độ sâu của các dự án đang triển khai.",
    rotation: "-rotate-3",
    tapeColor: "bg-[#3B82F6]/40",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    cat: "Phản hồi",
    date: "20 Thg 9, 2024",
    title: "Bài học từ Sự thất bại",
    excerpt: "Những gì chúng tôi học được khi một chiến dịch quan trọng không đạt được mục tiêu kỳ vọng.",
    rotation: "rotate-1",
    tapeColor: "bg-[#10B981]/40",
    image: null,
  }
];

export default function JournalEntries() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
        {entries.map((post) => (
          <div 
            key={post.id} 
            className={`relative bg-white p-4 md:p-6 shadow-xl transition-transform duration-300 hover:scale-105 hover:z-10 ${post.rotation}`}
            style={{
              border: "1.5px dashed #ccc",
              borderRadius: "4px",
            }}
          >
            {/* Washi Tape */}
            <div 
              className={`absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 opacity-80 backdrop-blur-sm -rotate-2 ${post.tapeColor}`}
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)"
              }}
            ></div>

            {/* Paperclip alternative (conditionally render if you want variety) */}
            {post.id % 2 === 0 && (
              <svg className="absolute -top-6 -right-2 w-12 h-12 text-gray-400 transform rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.818 8.818 6.364 6.364" />
              </svg>
            )}
            {post.id % 2 === 0 && (
                <div className="absolute -top-5 -left-3 transform -rotate-12">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
                  </svg>
                </div>
            )}

            {/* Polaroid Image */}
            <div className="bg-neutral-100 mb-4 h-48 w-full border border-neutral-200 p-2 handdrawn-border-2">
              {post.image ? (
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-all duration-500 rounded-sm" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-400 font-hand text-2xl">
                  No Photo
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mb-3 border-b border-dashed border-neutral-300 pb-2">
              <span className="text-brand-orange font-bold text-xs uppercase tracking-widest bg-brand-orange/10 px-2 py-1 rounded">
                {post.cat}
              </span>
              <span className="font-hand text-xl text-neutral-600 font-bold transform -rotate-2">
                {post.date}
              </span>
            </div>
            
            <h4 style={{ fontFamily: "var(--font-pattaya)" }} className="text-2xl font-bold mb-3 text-brand-dark leading-tight mt-2 min-h-[60px]">
              {post.title}
            </h4>
            
            <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-sans">
              {post.excerpt}
            </p>
            
            <Link to="#" className="inline-flex items-center text-sm font-bold border-b border-brand-dark pb-0.5 hover:text-brand-orange hover:border-brand-orange transition-colors uppercase tracking-widest mt-auto">
              <span className="mr-2">Xem chi tiết</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
