import { useState } from "react";
import { AnimatedNumber } from "../components/ui/AnimatedNumber";
import GallerySection from "../components/home/GallerySection";
import CommunityStatsSection from "../components/home/CommunityStatsSection";
import Footer from "../components/layout/Footer";

export default function SignUp() {
  const [activeTab, setActiveTab] = useState<'teen' | 'partner'>('teen');

  return (
    <div className="flex flex-col min-h-screen bg-surface relative overflow-hidden">
      {/* Background doodles */}
      <svg className="absolute top-40 right-[-5%] w-64 h-64 text-brand-purple-light opacity-5 transform rotate-45" viewBox="0 0 100 100" fill="currentColor">
         <polygon points="50,0 100,50 50,100 0,50" />
      </svg>
      <svg className="absolute bottom-40 left-[-5%] w-80 h-80 text-brand-orange opacity-5 transform -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="50" />
      </svg>

      <main className="flex-grow container mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row gap-12">
        <section className="flex-1 w-full max-w-3xl mx-auto flex flex-col">
          <div className="mb-12 relative">
             <div className="absolute top-0 left-0 w-32 h-6 bg-brand-orange/50 transform -rotate-2 -translate-y-4 -translate-x-4 mix-blend-multiply" style={{ clipPath: "polygon(0 0, 100% 5%, 98% 100%, 2% 95%)" }}></div>
             <h1 style={{ fontFamily: "var(--font-pattaya)" }} className="text-6xl lg:text-8xl tracking-normal mb-4 text-brand-purple relative z-10">Đăng ký</h1>
             <div className="text-lg text-neutral-600 border-l-4 border-dashed border-brand-orange pl-6 font-medium relative z-10">
               Mời điền thông tin vào biểu mẫu dưới đây để gia nhập cộng đồng <span className="font-black text-brand-dark">DOERS</span>.
             </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-4 relative z-20">
            <button 
              onClick={() => setActiveTab('teen')}
              className={`px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all transform ${activeTab === 'teen' ? 'bg-brand-orange text-white rotate-[-2deg] shadow-lg border-2 border-transparent' : 'bg-white text-neutral-600 rotate-[1deg] hover:rotate-0 hover:bg-orange-50 border-2 border-dashed border-neutral-300'}`}
              style={activeTab === 'teen' ? { borderRadius: "4px 8px 3px 6px" } : { borderRadius: "6px 3px 8px 4px" }}
            >
              DOERS (Teen)
            </button>
            <button 
              onClick={() => setActiveTab('partner')}
              className={`px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all transform ${activeTab === 'partner' ? 'bg-[#3B82F6] text-white rotate-[2deg] shadow-lg border-2 border-transparent' : 'bg-white text-neutral-600 rotate-[-1deg] hover:rotate-0 hover:bg-blue-50 border-2 border-dashed border-neutral-300'}`}
              style={activeTab === 'partner' ? { borderRadius: "8px 5px 6px 4px" } : { borderRadius: "4px 6px 5px 8px" }}
            >
              Mentor / Business
            </button>
          </div>

          <div className="w-full bg-white relative p-2 shadow-xl mt-4" style={{ border: "2px dashed #ccc", borderRadius: "12px" }}>
            {/* Washi Tape */}
            <div 
              className={`absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 opacity-80 backdrop-blur-sm ${activeTab === 'teen' ? 'rotate-2 bg-brand-lime' : '-rotate-1 bg-[#10B981]'}`}
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)"
              }}
            ></div>
            
            {/* Paperclip */}
            <div className="absolute -top-6 -right-2 transform rotate-45 z-20">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
              </svg>
            </div>

            <div className="w-full h-[800px] overflow-hidden rounded-lg bg-neutral-50 relative">
              {activeTab === 'teen' ? (
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfiJi9dz4TmKHUh4-weVxlUA-a6PjXHw2o4lJDsaq2Mf4VMaA/viewform?embedded=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="absolute inset-0"
                  title="Đăng ký DOERS (Teen)"
                >
                  Đang tải…
                </iframe>
              ) : (
                <iframe 
                  src="https://docs.google.com/forms/d/1HOTd6HXTqeFYeKnkPOvAW3JtjVJW6FIdiUjFUIJPLe4/viewform?embedded=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="absolute inset-0"
                  title="Đăng ký DOERS"
                >
                  Đang tải…
                </iframe>
              )}
            </div>
          </div>
        </section>

        {/* Right side with Stats/Gallery vibe */}
        <section className="hidden xl:flex w-[400px] flex-col justify-center">
            <div className="bg-white p-8 relative rotate-2 shadow-xl" style={{ border: "2px dashed #e5e5e5" }}>
                <div className="absolute -top-4 -left-4 w-16 h-8 bg-brand-purple/30 transform -rotate-12 backdrop-blur-sm" style={{ clipPath: "polygon(0 0, 100% 5%, 98% 100%, 2% 95%)" }}></div>
                <span className="text-8xl font-black text-brand-orange block mb-4 tracking-tighter" style={{ fontFamily: "var(--font-pattaya)" }}>
                   <AnimatedNumber value={10} suffix="k+" />
                </span>
                <h2 className="text-3xl font-bold text-brand-dark mb-4 leading-tight">
                    Các DOERS hành động mỗi ngày.
                </h2>
                <p className="text-neutral-500 font-medium">Học hỏi thực tế, tạo giá trị thật và trở thành phiên bản tốt hơn của chính mình.</p>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
