import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-xl bg-surface-dark border border-border-dark p-8 ${className}`}>
      {children}
    </div>
  );
}
