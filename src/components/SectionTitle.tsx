import { ReactNode } from "react";

interface SectionTitleProps {
  overline: string;
  title: ReactNode;
  className?: string;
}

export default function SectionTitle({ overline, title, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="text-primary font-bold uppercase tracking-[0.3em] mb-4">{overline}</h2>
      <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">{title}</h3>
    </div>
  );
}
