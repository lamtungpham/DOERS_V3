import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-6" data-purpose="top-navigation">
      <div className="flex justify-between items-center">
        <Link to="/" aria-label="Trang chủ DOERS" className="inline-block shrink-0">
          <img src="https://i.ibb.co/Z1f8w1kf/logo2-webp.webp" alt="DOERS Logo" className="h-20 md:h-28 w-auto object-contain" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-10 text-base font-bold">
          <Link
            to="/"
            aria-label="Trang chủ"
            className={cn(
              "transition-colors py-1 relative",
              location.pathname === "/" ? "text-[#0A0B10]" : "text-neutral-500 hover:text-brand-orange"
            )}
          >
            Trang chủ
            {location.pathname === "/" && (
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-orange" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            )}
          </Link>
          <Link
            to="/journal"
            aria-label="Nhật ký hoạt động"
            className={cn(
              "transition-colors py-1 relative",
               location.pathname === "/journal" ? "text-[#0A0B10]" : "text-neutral-500 hover:text-brand-orange"
            )}
          >
            Nhật ký
            {location.pathname === "/journal" && (
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-orange" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/signup"
            aria-label="Đăng ký tham gia DOERS"
            className="hidden md:flex bg-brand-orange items-center gap-2 text-[#0A0B10] px-6 py-2.5 rounded-full text-base font-bold hover:bg-orange-600 transition shadow-md"
          >
            Tham gia ngay 
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </Link>
          
          <button
            className="md:hidden p-2 text-neutral-800 hover:text-brand-orange focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-xl border border-neutral-100 p-4 flex flex-col gap-3 font-bold">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "px-4 py-3 border-b border-neutral-100/50 rounded-xl transition-colors",
              location.pathname === "/" ? "bg-brand-orange/10 text-brand-orange" : "text-neutral-600 hover:bg-neutral-50"
            )}
          >
            Trang chủ
          </Link>
          <Link 
            to="/journal" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "px-4 py-3 border-b border-neutral-100/50 rounded-xl transition-colors",
              location.pathname === "/journal" ? "bg-brand-orange/10 text-brand-orange" : "text-neutral-600 hover:bg-neutral-50"
            )}
          >
            Nhật ký
          </Link>
          <Link 
            to="/signup" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-4 py-3 rounded-xl bg-brand-orange text-[#0A0B10] flex items-center justify-center gap-2 mt-2 shadow-sm"
          >
            Tham gia ngay 
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-4 h-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </Link>
        </div>
      )}
    </nav>
  );
}
