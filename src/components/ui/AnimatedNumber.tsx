import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  padZero?: boolean;
}

export function AnimatedNumber({ value, suffix = "", padZero = false }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { rootMargin: "-50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  const valueStr = value.toString();
  const paddingLength = padZero ? Math.max(2, valueStr.length) : 0;
  
  const [displayValue, setDisplayValue] = useState(
    padZero ? "0".padStart(paddingLength, "0") : "0"
  );
  
  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const duration = 2000;
      
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        
        // easeOutExpo
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = Math.floor(easeOutExpo * value);
        
        let numStr = currentCount.toString();
        if (padZero) {
          numStr = numStr.padStart(paddingLength, '0');
        }
        
        setDisplayValue(numStr);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(padZero ? valueStr.padStart(paddingLength, '0') : valueStr);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, value, padZero, paddingLength, valueStr]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}
