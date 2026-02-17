import Image from "next/image";

interface LeaderboardCardProps {
  rank: string;
  team: string;
  territory: string;
  record: string;
  img: string;
  borderColor?: string;
}

export default function LeaderboardCard({
  rank,
  team,
  territory,
  record,
  img,
  borderColor = "border-primary",
}: LeaderboardCardProps) {
  return (
    <div className={`flex items-center justify-between p-6 bg-surface-dark border-l-4 ${borderColor} rounded-r-xl shadow-lg`}>
      <div className="flex items-center gap-6">
        <div className="text-3xl font-black italic text-slate-500">{rank}</div>
        <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-primary flex items-center justify-center overflow-hidden">
          <Image src={img} alt={team} width={64} height={64} className="w-full h-full object-cover" />
        </div>
        <div>
          <h5 className="text-xl font-bold uppercase italic">{team}</h5>
          <p className="text-sm text-slate-400">Territorio: {territory}</p>
        </div>
      </div>
      <div className="text-right">
        <div className={`text-2xl font-black ${borderColor === "border-primary" ? "text-primary" : "text-white"} italic`}>{record}</div>
        <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Récord G/P</div>
      </div>
    </div>
  );
}
