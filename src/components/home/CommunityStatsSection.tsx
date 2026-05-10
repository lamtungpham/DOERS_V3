import { Users, Briefcase, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { rootMargin: "-50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      let frameId: number;
      const duration = 2000;
      
      const animateCount = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        if (ref.current) {
          ref.current.textContent = Math.round(easeOutExpo * value).toString();
        }
        
        if (progress < 1) {
          frameId = requestAnimationFrame(animateCount);
        }
      };
      
      frameId = requestAnimationFrame(animateCount);
      return () => cancelAnimationFrame(frameId);
    }
  }, [isInView, value]);

  return <span ref={ref}>0</span>;
}

export default function CommunityStatsSection() {
  return (
    <section className="container mx-auto px-4 lg:px-6 py-12 relative z-20">
      
      {/* Decorative scribbles outside */}
      <svg className="absolute top-0 right-[15%] w-8 h-8 text-blue-500 hidden lg:block transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      <svg className="absolute bottom-[-10%] left-[25%] w-10 h-10 text-brand-purple-light hidden lg:block transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 15 Q12 18 16 15"/></svg>

      <div className="max-w-[1050px] mx-auto relative">
        <div className="absolute inset-0 bg-brand-purple rounded-[40px] lg:rounded-[60px] transform translate-y-3 -translate-x-2 -z-10"></div>
        <div className="bg-[#090B0F] rounded-[40px] lg:rounded-[60px] text-white py-10 px-8 lg:px-12 relative">
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4 relative">
            
            {/* Stat 1 */}
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-5 w-full relative group">
              <div className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-full bg-[#4620CD] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                 <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-col inline-flex relative items-center text-center">
                <div className="text-4xl lg:text-[44px] font-black tracking-tight text-white leading-none mb-1 relative inline-block">
                  <Counter value={300} />+
                  <svg className="absolute -bottom-2 left-0 w-full h-[6px] text-brand-lime" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-neutral-300 font-bold uppercase text-[13px] tracking-[0.1em] leading-tight font-sans mt-2">DOERS (TEEN)</div>
              </div>
              {/* Vertical Dashed Divider */}
              <div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[url('data:image/svg+xml;utf8,<svg width=\&quot;1\&quot; height=\&quot;20\&quot; viewBox=\&quot;0 0 1 20\&quot; fill=\&quot;none\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot;><path d=\&quot;M0.5 0V20\&quot; stroke=\&quot;%234b5563\&quot; stroke-width=\&quot;1\&quot; stroke-dasharray=\&quot;4 4\&quot;/></svg>')] opacity-50"></div>
            </div>

            {/* Stat 2 */}
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-5 w-full relative group">
              <div className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-full bg-[#FF5A00] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                 <Briefcase className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-col inline-flex relative items-center text-center">
                <div className="text-4xl lg:text-[44px] font-black tracking-tight text-white leading-none mb-1 relative inline-block">
                  <Counter value={50} />+
                  <svg className="absolute -bottom-2 left-0 w-full h-[6px] text-brand-lime" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,8 100,2" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-neutral-300 font-bold uppercase text-[13px] tracking-[0.1em] leading-tight font-sans mt-2">DOANH NGHIỆP</div>
              </div>
               {/* Vertical Dashed Divider */}
               <div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[url('data:image/svg+xml;utf8,<svg width=\&quot;1\&quot; height=\&quot;20\&quot; viewBox=\&quot;0 0 1 20\&quot; fill=\&quot;none\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot;><path d=\&quot;M0.5 0V20\&quot; stroke=\&quot;%234b5563\&quot; stroke-width=\&quot;1\&quot; stroke-dasharray=\&quot;4 4\&quot;/></svg>')] opacity-50"></div>
            </div>

            {/* Stat 3 */}
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-5 w-full group">
              <div className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-full bg-[#3B82F6] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                <Star className="w-8 h-8 text-white" fill="white" strokeWidth={1.5} />
              </div>
              <div className="flex-col inline-flex relative items-center text-center">
                <div className="text-4xl lg:text-[44px] font-black tracking-tight text-white leading-none mb-1 relative inline-block">
                  <Counter value={50} />+
                  <svg className="absolute -bottom-2 left-0 w-full h-[6px] text-brand-lime" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,6" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-neutral-300 font-bold uppercase text-[13px] tracking-[0.1em] leading-tight font-sans mt-2">MENTORS</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
