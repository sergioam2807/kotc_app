import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  message: string;
  actionLabel: string;
  onAction?: () => void;
  color: "emerald" | "red" | "blue";
}

const colorMap = {
  emerald: {
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-500",
    border: "border-primary/20",
    bar: "bg-emerald-500",
  },
  red: {
    iconBg: "bg-red-500/10",
    iconText: "text-red-500",
    border: "border-red-500/20",
    bar: "bg-red-500",
  },
  blue: {
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
    border: "border-blue-500/20",
    bar: "bg-blue-500",
  },
};

export default function Modal({
  open,
  onClose,
  icon,
  title,
  subtitle,
  message,
  actionLabel,
  onAction,
  color,
}: ModalProps) {
  if (!open) return null;
  const c = colorMap[color];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className={`w-full max-w-sm bg-surface-dark rounded-xl shadow-2xl border ${c.border} overflow-hidden`}>
        <div className="p-8 flex flex-col items-center text-center">
          <div className={`mb-6 ${c.iconBg} p-4 rounded-full`}>
            <span className={`material-symbols-outlined ${c.iconText} text-5xl`}>{icon}</span>
          </div>
          {subtitle && <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{subtitle}</p>}
          <h3 className="text-2xl font-bold text-slate-100 mb-3">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">{message}</p>
          <button
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            onClick={() => {
              onAction?.();
              onClose();
            }}
          >
            <span>{actionLabel}</span>
          </button>
        </div>
        <div className={`h-1.5 w-full ${c.bar}`}></div>
      </div>
    </div>
  );
}
