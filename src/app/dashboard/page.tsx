import React from "react";
import Sidebar from "@/components/dashboard2/Sidebar";
import Dashboard2Header from "@/components/dashboard2/Dashboard2Header";
import Dashboard2Footer from "@/components/dashboard2/Dashboard2Footer";
import HeroSection from "@/components/dashboard2/HeroSection";
import StatsGrid from "@/components/dashboard2/StatsGrid";
import RivalRecommendations from "@/components/dashboard2/RivalRecommendations";
import ChallengesFeed from "@/components/dashboard2/ChallengesFeed";

export default function Dashboard2Page() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen overflow-x-hidden">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-y-auto bg-background-dark urban-gradient">
          <Dashboard2Header />
          <div className="p-8 space-y-8">
            <HeroSection />
            <StatsGrid />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <RivalRecommendations />
              </div>
              <div>
                <ChallengesFeed />
              </div>
            </div>
          </div>
          <Dashboard2Footer />
        </main>
      </div>
    </div>
  );
}
