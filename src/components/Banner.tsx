import { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
  className?: string;
}

export default function Banner({ children, className = "" }: BannerProps) {
  return (
    <div className={`w-full py-4 bg-primary text-white font-black italic uppercase tracking-widest text-sm opacity-90 ${className}`}>
      {children}
    </div>
  );
}
