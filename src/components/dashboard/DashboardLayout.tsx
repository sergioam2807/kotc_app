import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen overflow-x-hidden">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-y-auto bg-background-dark urban-gradient">
          <DashboardHeader />
          <div className="p-8 space-y-8 flex-1 flex flex-col">
            {children}
          </div>
          <DashboardFooter />
        </main>
      </div>
    </div>
  );
}
