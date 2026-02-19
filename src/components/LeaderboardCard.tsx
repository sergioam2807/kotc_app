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
        <div className="flex flex-col items-center justify-center gap-0">
          {rank === "01" && (
            <span className="material-symbols-outlined text-yellow-400 text-xl -mt-4 -mb-2 ml-2">crown</span>
          )}
          <div className="text-3xl font-black italic text-white">{rank}</div>
        </div>
        <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-primary flex items-center justify-center overflow-hidden">
          <Image src={img} alt={team} width={64} height={64} className="w-full h-full object-cover" />
        </div>
        <div>
          <h5 className="text-xl font-bold uppercase italic">{team}</h5>
          <p className="text-sm text-white">Territorio: {territory}</p>
        </div>
      </div>
      <div className="text-right">
        <div className={`text-2xl font-black ${borderColor === "border-primary" ? "text-primary" : "text-white"} italic`}>{record}</div>
        <div className="text-xs font-bold uppercase tracking-widest text-white">Récord G/P</div>
      </div>
    </div>
  );
}
