import { Target, Megaphone, BarChart2, Rocket } from "lucide-react";

export default function IntroSection() {
  const reasons = [
    {
      icon: <Target className="w-12 h-12 text-brand-purple" />,
      title: "THỰC CHIẾN\nDOANH NGHIỆP",
      desc: "Trải nghiệm môi trường thật,\ngiải quyết bài toán thật.",
      color: "border-brand-purple"
    },
    {
      icon: <Megaphone className="w-12 h-12 text-brand-orange" />,
      title: "TƯ DUY\nKINH DOANH",
      desc: "Lên ý tưởng kinh doanh,\nxây kênh truyền thông, bán hàng.",
      color: "border-brand-orange"
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-blue-500" />,
      title: "RÈN LUYỆN\nÝ CHÍ",
      desc: "Dũng cảm, kỷ luật, \nchủ động, kiên định.",
      color: "border-blue-500"
    },
    {
      icon: <Rocket className="w-12 h-12 text-emerald-500" />,
      title: "PHÁT TRIỂN\nKỸ NĂNG MỀM",
      desc: "Kỹ năng giao tiếp, teamwork,\nleadership, ứng dụng AI.",
      color: "border-emerald-500"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20 relative">
      <div className="flex flex-col justify-center items-center gap-2 mb-16 relative">
        <h2 className="text-3xl lg:text-4xl font-black text-brand-dark uppercase tracking-wider text-center relative z-10">
          VÌ SAO NÊN LÀ DOERS?
        </h2>
        {/* Zigzag underline */}
        <svg className="w-64 h-4 text-brand-purple-light mt-1" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0,5 L10,0 L20,10 L30,0 L40,10 L50,0 L60,10 L70,0 L80,10 L90,0 L100,5" strokeLinejoin="round" />
        </svg>

        {/* Doodle star and heart */}
        <svg className="w-8 h-8 text-brand-orange absolute -top-4 right-[20%] translate-x-12 hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        <svg className="w-8 h-8 text-brand-orange absolute top-10 left-[15%] hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, idx) => (
          <div key={idx} className={`relative p-8 bg-white border-2 ${r.color} transition-transform hover:-translate-y-2 flex flex-col items-center text-center mt-4 shadow-sm z-10`} style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
             
             {/* Paper tape on alternate cards */}
             {idx % 2 === 0 ? (
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#e8e6df] transform -rotate-3 border-x-2 border-white/50 shadow-sm z-20" style={{ clipPath: 'polygon(5% 0%, 95% 5%, 98% 95%, 2% 100%)' }}></div>
             ) : (
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#e8e6df] transform rotate-3 border-x-2 border-white/50 shadow-sm z-20" style={{ clipPath: 'polygon(5% 0%, 95% 5%, 98% 95%, 2% 100%)' }}></div>
             )}
             
             <div className="mb-6 mt-4">
               {r.icon}
             </div>
             
             <h3 className="text-lg font-black uppercase tracking-wide text-brand-dark mb-4 h-12 flex items-center justify-center whitespace-pre-line leading-tight">
               {r.title}
             </h3>
             <p className="text-neutral-600 font-medium text-sm leading-relaxed whitespace-pre-line">
               {r.desc}
             </p>
          </div>
        ))}
      </div>
      
      {/* Sparkles everywhere */}
      <svg className="absolute bottom-0 right-10 w-8 h-8 text-yellow-400 hidden xl:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07L19.07 4.93"/>
      </svg>
    </section>
  );
}
