import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-12 lg:py-20 relative">
      {/* Background Doodles */}
      {/* Crown top left */}
      <svg className="absolute top-10 left-[15%] w-16 h-16 text-brand-purple-light opacity-80 transform -rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,60 L30,20 L50,40 L70,20 L80,60 Z" />
      </svg>

      <svg className="absolute top-1/4 right-[10%] w-14 h-14 text-brand-purple-light opacity-50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <polygon points="30,20 80,50 30,80" strokeLinejoin="round" />
      </svg>
      {/* Stars and sprinkles */}
      <svg className="absolute top-1/3 left-1/3 w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      <svg className="absolute top-[20%] left-[50%] w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col items-start relative z-10 lg:pl-4 xl:pl-10">
          <div className="bg-[#6635d0] text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transform -rotate-[3deg] mb-4 shadow-sm relative z-10">
            TEEN THỰC CHIẾN – DOANH NGHIỆP THẬT
          </div>

          <h1 className="text-[6rem] sm:text-[8rem] lg:text-[10rem] font-black text-brand-dark leading-[0.8] tracking-[-0.04em] mb-0 transform -rotate-[2deg] mt-6">
            DOERS
          </h1>
          <h2 className="text-[4rem] sm:text-[5rem] lg:text-[6.5rem] text-brand-purple-light transform -rotate-[6deg] leading-none mb-8 -mt-4 drop-shadow-sm z-10 font-hand font-bold">
            Make it real!
          </h2>
          
          <p className="text-base lg:text-lg text-neutral-600 max-w-[380px] mb-8 font-medium leading-relaxed">
            DOERS là dự án FREE, nơi các Teen thực chiến tại doanh nghiệp,
            xây kênh truyền thông và quảng bá sản phẩm,
            tạo giá trị thật cho cộng đồng.
          </p>

          <div className="flex items-center gap-4 relative">
            <a href="https://drive.google.com/file/d/10JxIxAa2AoJT0uKSMuwodM79oZoYkG6B/view" target="_blank" rel="noopener noreferrer" aria-label="Xem Portfolio DOERS" className="bg-brand-orange text-[#0A0B10] px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-orange-600 transition shadow-md relative z-10 whitespace-nowrap">
              XEM PORTFOLIO
            </a>
            {/* Simple loop doodle arrow */}
            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className="text-brand-orange hidden sm:block transform translate-y-2 shrink-0">
               <path d="M5,25 Q15,10 25,25 T45,25 T65,25 Q75,10 85,25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
               <path d="M75,15 L88,25 L75,35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Right Side: Image & Decor */}
        <div className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center mt-10 lg:mt-0 xl:scale-110 xl:-translate-x-10">
          
          {/* Subtle Organic Background Blob - replacing hard edges */}
          <div className="absolute w-[105%] h-[105%] bg-gradient-to-tr from-[#6635d0]/30 to-brand-purple-light/20 [border-radius:45%_55%_70%_35%/50%_45%_60%_50%] transform rotate-[15deg] -z-10 blur-2xl"></div>
          
          <div className="absolute w-[90%] h-[90%] bg-gradient-to-br from-[#6635d0] via-brand-purple to-[#4514a8] [border-radius:30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-[6deg] -z-10 shadow-2xl overflow-hidden">
            {/* Inner details to make the shape less monotonous */}
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(#fff 2px, transparent 2px)", backgroundSize: "24px 24px" }}></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
            <div className="absolute bottom-10 left-10 w-60 h-60 bg-[#FF5A00]/20 rounded-full blur-2xl mix-blend-overlay"></div>
            {/* Inner swoosh */}
            <svg className="absolute -bottom-[20%] -right-[10%] w-[120%] h-[120%] opacity-20 text-white transform -rotate-12" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-20,150 Q100,50 250,150" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
              <path d="M-20,180 Q100,80 250,180" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Main Image */}
          <picture>
            {/* Ảnh Mobile (width <= 768px): Hãy thay bằng link ảnh đã nén nhỏ khoảng 400px - 600px */}
            <source media="(max-width: 768px)" srcSet="https://i.ibb.co/35RhTj0q/hero-mobile.webp" />
            {/* Ảnh Desktop (width >= 769px): Ảnh kích thước chuẩn 800px - 1200px */}
            <source media="(min-width: 769px)" srcSet="https://i.ibb.co/6JJFxwfx/hero.webp" />
            <img 
               src="https://i.ibb.co/6JJFxwfx/hero.webp" 
               alt="Doers Team working" 
               width="800"
               height="800"
               fetchPriority="high"
               className="w-[120%] h-[120%] object-contain z-10 drop-shadow-2xl -translate-y-4 translate-x-4"
            />
          </picture>

          {/* Floating Badges */}
          <div className="absolute top-[8%] left-[8%] bg-brand-dark text-brand-lime px-4 py-2 font-black text-sm uppercase tracking-wide transform -rotate-[6deg] shadow-lg z-20 flex flex-col items-center [border-radius:12px_8px_16px_8px/8px_16px_8px_12px] font-sans">
            <span>CREATE</span>
            <span>CONTENT</span>
          </div>
          
          <div className="absolute top-[25%] right-[2%] bg-brand-dark text-white px-5 py-2.5 font-black text-sm uppercase tracking-wide transform rotate-[8deg] shadow-lg z-20 flex flex-col items-center [border-radius:8px_16px_8px_16px/12px_8px_16px_8px] font-sans">
            <span>GROW</span>
            <span>BUSINESS</span>
            {/* Doodle lightning in white badge */}
            <svg className="absolute -left-6 -bottom-10 w-12 h-12 text-yellow-400 transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>

          <div className="absolute bottom-[20%] right-[8%] bg-brand-dark text-brand-orange px-5 py-2.5 font-black text-sm uppercase tracking-wide transform -rotate-[5deg] shadow-lg z-20 flex flex-col items-center [border-radius:16px_8px_12px_8px/8px_12px_8px_16px] font-sans">
            <span>IMPACT</span>
            <span>COMMUNITY</span>
          </div>
          
          {/* Smiley face doodle bottom right */}
          <svg className="absolute -bottom-[2%] right-[10%] w-16 h-16 text-brand-purple-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
            <path d="M8 15 Q12 18 16 15" />
          </svg>

           {/* Special Star Doodle inside blob */}
           <svg className="absolute top-1/4 left-1/4 w-10 h-10 text-yellow-400 z-10 transform -rotate-[15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
           </svg>
           
           <svg className="absolute bottom-[30%] left-[-5%] w-8 h-8 text-white z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10" />
             <path d="M12 6v12M6 12h12" />
           </svg>
        </div>
      </div>
    </section>
  );
}
