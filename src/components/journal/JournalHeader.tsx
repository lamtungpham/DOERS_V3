import { FileText } from "lucide-react";
import { AnimatedNumber } from "../ui/AnimatedNumber";

export default function JournalHeader() {
  return (
    <header className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end pb-8 relative">
      {/* Decorative Washi Tape */}
      <div className="absolute top-0 left-0 w-32 h-6 bg-brand-lime/50 transform -rotate-3 -translate-y-4 -translate-x-4" style={{ clipPath: "polygon(0 0, 100% 5%, 98% 100%, 2% 95%)" }}></div>

      <div className="max-w-xl relative">
        <h1 style={{ fontFamily: "var(--font-pattaya)" }} className="text-6xl lg:text-8xl tracking-normal mb-4 text-brand-purple">Nhật ký</h1>
        <div className="text-lg text-neutral-600 border-l-4 border-dashed border-brand-orange pl-6 font-medium">
          Những mẩu chuyện, ghi chép nhanh và bài học thực tế từ hành trình của <span className="font-black text-brand-dark">DOERS</span>.
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex items-center bg-white p-6 rounded-sm rotate-2 shadow-sm" style={{ border: "2px dashed #e5e5e5" }}>
        {/* Paperclip */}
        <div className="absolute -top-3 left-4 transform -rotate-12">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
          </svg>
        </div>
        <FileText className="w-8 h-8 text-brand-orange mr-4" />
        <div>
          <div className="text-4xl font-bold tracking-tighter">
            <AnimatedNumber value={142} />
          </div>
          <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Bài viết</div>
        </div>
      </div>
    </header>
  );
}
