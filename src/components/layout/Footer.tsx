import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative mt-20">
      {/* Wavy top border of the footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 transform -translate-y-[99%]">
        <svg fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-brand-purple">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C89.71,118.89,203.62,78.17,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="bg-brand-purple text-white pt-10 pb-12 md:pb-16 relative z-10">
        
        {/* Wavy bottom border of the footer */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 transform translate-y-[99%]">
          <svg fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 text-brand-purple">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 relative">
               <h2 className="text-4xl lg:text-5xl font-black mb-2 uppercase tracking-wide">
                 SẴN SÀNG TRỞ THÀNH <br />
                 <span className="text-brand-lime text-[4rem] tracking-tight leading-none">DOERS?</span>
               </h2>
               <p className="text-lg text-white/90 font-medium">
                 Học hỏi. Trải nghiệm. Kết nối.<br/>Cùng nhau tạo ra tác động tích cực cho cộng đồng.
               </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 relative">
              {/* Decorative scribble lines */}
              <svg className="absolute -left-12 -top-4 w-12 h-12 text-white/50 transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M4 12 L16 4 M4 16 L20 8 M4 20 L24 12" />
              </svg>

              <Link to="/signup" className="flex items-center justify-center w-full gap-2 bg-brand-lime text-brand-dark px-8 py-4 rounded-full text-xl font-bold hover:bg-[#a8d304] transition hover:scale-105 shadow-[0_0_0_4px_rgba(255,255,255,0.2)]">
                THAM GIA NGAY 
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </Link>

              <a href="https://drive.google.com/file/d/10JxIxAa2AoJT0uKSMuwodM79oZoYkG6B/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full gap-2 bg-white/10 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-white/20 transition hover:scale-105 border border-white/20 backdrop-blur-sm">
                XEM PORTFOLIO
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
              
              {/* Doodle spring */}
              <svg className="absolute -bottom-8 -right-8 w-16 h-16 text-yellow-400 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <path d="M20,20 Q50,0 80,40 Q100,70 50,80 Q10,90 20,20" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Section - dark matching text bg */}
      <div className="bg-brand-dark text-white pt-16 md:pt-20 pb-10 relative overflow-hidden">
        {/* Thunder graphic */}
        <svg className="absolute bottom-4 right-[20%] w-24 h-24 text-brand-purple-light opacity-30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
           <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor"/>
        </svg>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
            
            {/* Left Column */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link to="/" aria-label="Trang chủ DOERS" className="text-3xl font-black tracking-widest text-white mb-4 hover:text-brand-orange transition-colors">
                DOERS
              </Link>
              <p className="text-neutral-300 font-medium leading-relaxed max-w-sm text-sm">
                Cùng nhau tạo ra tác động tích cực cho cộng đồng thông qua giáo dục, sáng tạo và hành động.
              </p>
            </div>

            {/* Right Column - Socials */}
            <div className="flex gap-4">
              <a href="mailto:phanhphieuluuky@gmail.com" aria-label="Gửi email" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-orange text-brand-dark transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
              <a href="https://www.facebook.com/phanhphieuluuky.518" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-orange text-brand-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@phanhphieuluuky" aria-label="Tiktok" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-orange text-brand-dark transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
              <a href="https://www.youtube.com/@phanhphieuluuky.official" aria-label="Youtube" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-brand-orange text-brand-dark transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
