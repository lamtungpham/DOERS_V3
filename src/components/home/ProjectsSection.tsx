import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "LiftOn",
    desc: "Onboard, nắm brand, hiểu sản phẩm, chốt mục tiêu",
    colorBg: "bg-brand-orange",
    colorBorder: "border-brand-orange",
    colorBorderHover: "lg:group-hover:border-brand-orange",
    colorText: "text-brand-orange",
  },
  {
    id: 2,
    title: "Factory Run",
    desc: "Thực tế tại doanh nghiệp, trải nghiệm quy trình, quay chụp, lấy vibe sáng tạo",
    colorBg: "bg-brand-purple",
    colorBorder: "border-brand-purple",
    colorBorderHover: "lg:group-hover:border-brand-purple",
    colorText: "text-brand-purple",
  },
  {
    id: 3,
    title: "Go Live",
    desc: "Launch kênh, đăng content test, collect phản hồi nhanh",
    colorBg: "bg-[#3B82F6]",
    colorBorder: "border-[#3B82F6]",
    colorBorderHover: "lg:group-hover:border-[#3B82F6]",
    colorText: "text-[#3B82F6]",
  },
  {
    id: 4,
    title: "Level Up",
    desc: "Review số liệu, rút ra insight, cải tiến và tối ưu",
    colorBg: "bg-[#10B981]",
    colorBorder: "border-[#10B981]",
    colorBorderHover: "lg:group-hover:border-[#10B981]",
    colorText: "text-[#10B981]",
  }
];

export default function ProjectsSection() {
  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <section className="container mx-auto px-4 lg:px-6 py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background doodles */}
      <svg className="absolute top-20 right-10 w-16 h-16 text-brand-purple-light opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10,50 Q50,10 90,50 Q50,90 10,50" />
      </svg>
      <svg className="absolute bottom-20 left-10 w-12 h-12 text-blue-500 opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
        <polygon points="50,10 90,90 10,90" />
      </svg>

      <div className="max-w-[1050px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20">
          
          {/* Left Column: List */}
          <div>
             <div className="mb-10 relative inline-block">
                <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tight leading-tight relative z-10">
                  DỰ ÁN<br />ĐANG DIỄN RA
                </h2>
                <div className="absolute -bottom-1 left-0 w-full h-3 bg-brand-lime opacity-60 -z-10 rounded-full transform -rotate-1"></div>
             </div>
             
             <div className="space-y-6 relative flex flex-col">
               {/* Connecting vertical line */}
               <div className="absolute left-[20px] top-8 bottom-8 w-[1px] border-l-2 border-dotted border-neutral-300 -z-10"></div>
               
               {steps.map((step) => {
                 const isActive = activeStep === step.id;
                 return (
                   <div 
                     key={step.id} 
                     className="flex items-start gap-6 cursor-pointer group relative"
                     onClick={() => setActiveStep(isActive ? null : step.id)}
                   >
                     <div className={`w-10 h-10 rounded-full ${step.colorBg} text-white font-bold flex items-center justify-center shrink-0 z-10 transition-opacity mt-0.5 ${isActive ? 'opacity-100' : 'opacity-80 lg:group-hover:opacity-100'}`}>
                       {step.id}
                     </div>
                     <div className={`border-[1.5px] ${isActive ? step.colorBorder : 'border-transparent'} ${step.colorBorderHover} rounded-[24px] px-6 py-2.5 w-full transition-all duration-300 ${isActive ? 'bg-white' : 'lg:group-hover:bg-white'} font-sans text-sm relative`}>
                       <div className={`font-bold transition-colors ${isActive ? step.colorText : 'text-neutral-500 lg:group-hover:text-brand-dark'} flex justify-between items-center`}>
                         <span>{step.title}</span>
                         {step.id === 1 && (
                           <MapPin className="w-5 h-5 text-brand-orange animate-bounce" />
                         )}
                       </div>
                       {/* Expandable Description */}
                       <div className={`grid transition-all duration-300 ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] lg:group-hover:grid-rows-[1fr]'}`}>
                         <div className="overflow-hidden">
                           <p className="pt-2 text-neutral-600 font-normal text-[13px] leading-relaxed">
                             {step.desc}
                           </p>
                         </div>
                       </div>
                     </div>
                   </div>
                 );
               })}
             </div>
          </div>

          {/* Right Column: Card */}
          <div className="relative">
             <div className="bg-[#090B0F] rounded-[30px] p-6 lg:p-8 flex flex-col md:flex-row gap-6 relative z-10">
               
               {/* Tape detail on top */}
               <div className="absolute -top-3 left-[30%] -translate-x-1/2 w-20 h-6 bg-yellow-100/90 shadow-sm transform -rotate-2 z-20"></div>
               
               <div className="w-full md:w-[45%] shrink-0">
                 <img 
                   src="https://i.ibb.co/5Xtqbg8f/chulong.webp?q=80&w=600&auto=format&fit=crop" 
                   alt="Project LiftOn" width="600" height="400"
                   loading="lazy"
                   className="w-full h-[240px] md:h-full object-cover rounded-[20px] border border-neutral-800"
                 />
               </div>
               
               <div className="flex-1 flex flex-col justify-center py-4 relative">
                 {/* Smile doodle */}
                 <svg className="absolute top-[-20px] left-[50%] w-10 h-10 text-brand-purple-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="10"/><path d="M8 15 Q12 18 16 15"/><circle cx="8" cy="10" r="1.5" fill="currentColor"/><circle cx="16" cy="10" r="1.5" fill="currentColor"/>
                 </svg>

                 <div className="flex justify-between items-start mb-6 font-sans">
                   <h3 className="text-[22px] font-black text-white leading-tight uppercase tracking-wide">
                     ĐƯA ẨM THỰC<br />TRUYỀN THỐNG<br />TỚI GEN Z
                   </h3>
                   <img 
                     src="https://cdn.kiotvietweb.vn/merchant/24d54239dc4d8d8753f614117c1bb73e/other/1750664528/logo_VANG.png" 
                     alt="Vinh Lộc Logo" width="96" height="96"
                     loading="lazy"
                     className="w-24 object-contain shrink-0 transform -rotate-6 mt-2 hidden sm:block drop-shadow-sm opacity-90"
                   />
                 </div>

                 <p className="text-neutral-300 text-[15px] mb-8 leading-relaxed font-sans max-w-[90%]">
                   Chúng mình cùng Vĩnh Lộc Ước Lễ lan tỏa những giá trị ẩm thực truyền thống qua góc nhìn Gen Z sáng tạo.
                 </p>

                 <Link to="/project/lifton" aria-label="Xem chi tiết dự án LiftOn" className="text-brand-purple-light hover:text-brand-lime font-bold flex items-center gap-2 transition-colors text-sm font-sans mt-auto">
                   Xem chi tiết dự án 
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                     <path d="M5 12h14M12 5l7 7-7 7"/>
                   </svg>
                 </Link>
               </div>
               
               {/* Decorative curved arrow pointing to link */}
               <svg className="absolute bottom-8 right-6 w-12 h-12 text-brand-purple-light opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M80,20 Q50,90 20,60" />
                 <path d="M20,60 L35,65 M20,60 L20,75" />
               </svg>
               
             </div>
             
          </div>

        </div>
      </div>
    </section>
  );
}
