import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  [x: string]: any;
}

export default function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const base =
    "px-6 py-2 rounded-lg font-bold text-sm transition-all uppercase focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white glow-primary",
    secondary:
      "bg-surface-dark border border-border-dark text-white hover:bg-surface-dark/80",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
