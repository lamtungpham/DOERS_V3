import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function GallerySection() {
  return (
    <section className="container mx-auto px-6 py-16 relative">
      <div className="flex justify-between items-end mb-12">
        <div className="flex flex-col gap-2 relative">
          <h2 className="text-3xl lg:text-4xl font-black text-brand-dark uppercase tracking-wider relative z-10 w-fit">
            ALBUM <span className="text-brand-purple">ẢNH</span> HOẠT ĐỘNG
          </h2>
          {/* Zigzag underline */}
          <svg className="w-24 h-4 text-brand-purple mt-1" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M0,5 L10,0 L20,10 L30,0 L40,10 L50,0 L60,10 L70,0 L80,10 L90,0 L100,5" strokeLinejoin="round" />
          </svg>
        </div>
        
        <Link to="/journal" aria-label="Xem tất cả nhật ký hoạt động" className="hidden border-2 border-brand-purple text-brand-purple font-bold px-6 py-2 rounded-full hover:bg-brand-purple hover:text-white transition-colors sm:flex items-center gap-2">
          Xem tất cả <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Large Image */}
        <div className="md:col-span-1 border-[4px] border-white shadow-md relative group rounded-[15px] overflow-hidden" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
          <img 
            src="https://i.ibb.co/933W9L2v/474897015-122141191604553991-907753041860819748-n.jpg?q=80&w=800&auto=format&fit=crop" 
            alt="Doers Team Activity" 
            loading="lazy"
            width="800"
            height="800"
            className="w-full h-full min-h-[300px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Small Images Grid */}
        <div className="md:col-span-1 grid grid-cols-2 gap-4">
          <div className="border-[4px] border-white shadow-md relative group rounded-[15px] overflow-hidden min-h-[140px]" style={{ borderRadius: '15px 255px 15px 225px/225px 15px 255px 15px' }}>
            <img 
              src="https://i.ibb.co/rKL2P3JT/501530007-122172567290553991-3271262728546306513-n.jpg?q=80&w=400&auto=format&fit=crop" 
              alt="Activity 1" 
              loading="lazy"
              width="400"
              height="400"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="border-[4px] border-white shadow-md relative group rounded-[15px] overflow-hidden min-h-[140px]" style={{ borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px' }}>
            <img 
              src="https://i.ibb.co/LhBqcR5z/598696524-17869402215492032-196568958758583279-n.jpg?q=80&w=400&auto=format&fit=crop" 
              alt="Activity 2" 
              loading="lazy"
              width="400"
              height="400"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="border-[4px] border-white shadow-md relative group rounded-[15px] overflow-hidden min-h-[140px]" style={{ borderRadius: '15px 225px 15px 255px/255px 15px 225px 15px' }}>
            <img 
              src="https://i.ibb.co/MkbpcsWj/600085099-17870006436492032-5267118880819849735-n.jpg?q=80&w=400&auto=format&fit=crop" 
              alt="Activity 3" 
              loading="lazy"
              width="400"
              height="400"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="border-[4px] border-white shadow-md relative group rounded-[15px] overflow-hidden min-h-[140px]" style={{ borderRadius: '225px 15px 255px 15px/15px 255px 15px 225px' }}>
            <img 
              src="https://i.ibb.co/YB8RG4dW/ho-bang-3-17733781879491976405575-84-0-1364-2048-crop-1773379845170814885467.webp?q=80&w=400&auto=format&fit=crop" 
              alt="Activity 4" 
              loading="lazy"
              width="400"
              height="400"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      
      <Link to="/journal" aria-label="Xem tất cả nhật ký hoạt động" className="mt-8 border-2 border-brand-purple text-brand-purple font-bold px-6 py-2 rounded-full flex justify-center items-center gap-2 sm:hidden hover:bg-brand-purple hover:text-white transition-colors">
        Xem tất cả <ArrowRight className="w-4 h-4" />
      </Link>
      
      {/* Doodle hearts/stars */}
      <svg className="absolute top-[40%] -left-12 w-16 h-16 text-yellow-400 hidden xl:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10,50 L40,10 L30,40 M60,10 L80,30 L50,40" />
      </svg>
      <svg className="absolute bottom-10 right-0 w-8 h-8 text-brand-purple hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      {/* Little hearts */}
      <svg className="absolute top-10 right-1/4 w-6 h-6 text-brand-orange hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </section>
  );
}
