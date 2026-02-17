"use client";

import React from "react";

const Sidebar = () => (
  <aside className="w-64 flex-shrink-0 border-r border-[#2d1d19] bg-[#1e1310] hidden lg:flex flex-col text-white">
    <div className="p-6 flex items-center gap-3">
      <div className="size-8 bg-primary rounded flex items-center justify-center">
        <span className="material-symbols-outlined text-white">sports_basketball</span>
      </div>
      <h1 className="text-xl font-extrabold tracking-tight uppercase italic text-primary">K.O.T.C.</h1>
    </div>
    <nav className="flex-1 px-4 py-4 space-y-2">
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white font-semibold" href="#">
        <span className="material-symbols-outlined">dashboard</span>
        <span>Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-accent-dark hover:text-white transition-all" href="#">
        <span className="material-symbols-outlined">calendar_month</span>
        <span>Schedule</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-accent-dark hover:text-white transition-all" href="#">
        <span className="material-symbols-outlined">leaderboard</span>
        <span>Rankings</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-accent-dark hover:text-white transition-all" href="#">
        <span className="material-symbols-outlined">groups</span>
        <span>My Team</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-accent-dark hover:text-white transition-all" href="#">
        <span className="material-symbols-outlined">history</span>
        <span>Match History</span>
      </a>
    </nav>
    <div className="p-4 border-t border-accent-dark">
      <div className="flex items-center gap-3 p-2 rounded-lg bg-accent-dark/50">
        <div className="size-10 rounded-full bg-cover bg-center border border-primary/50" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfY-xNF9yq9od_vBIPZGMnUe91JedSeBdlhljWQ8W4IsWCRyJ2L9xuxHo-6GNer5aPBFxss93V7phrQpGoqxh0liMxn3sD9w4GolSzfzhyhKJBZ9E8KfnuQpay1jaxtIu68MscYkxby1ZlrNDfK1NwUP_F_0-mLq7yCH0DZGDsrEwhwsswOUjED7XIlZ7RD8XVBawWvengrhfnh8TvAbP1VYEzRh5hhuPlE4xQPdhmLupgsOZ1ql1HLLajQXWndNiwY7FNsCMVBDro')" }}></div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold truncate">Marcus Vane</p>
          <p className="text-xs text-slate-500 uppercase font-medium">Pro Baller</p>
        </div>
        <span className="material-symbols-outlined text-slate-500 text-sm">settings</span>
      </div>
    </div>
  </aside>
);

export default Sidebar;
