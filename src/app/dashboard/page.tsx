import React from "react";
import HeroSection from "@/components/dashboard/HeroSection";
import StatsGrid from "@/components/dashboard/StatsGrid";
import RivalRecommendations from "@/components/dashboard/RivalRecommendations";
import ChallengesFeed from "@/components/dashboard/ChallengesFeed";

export default function DashboardPage() {
  return (
    <>
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
    </>
  );
}
