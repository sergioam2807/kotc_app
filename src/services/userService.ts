export interface UserData {
    pointsPerGame?: number;
    defensiveRating?: number;
    defensiveGrade?: string | null;
    globalRanking?: number;
    rankingChange?: number;
    teamChemistry?: number;
  id: number;
  auth0Id: string;
  email: string;
  name: string;
  picture: string;
  createdAt: string;
  updatedAt: string;
  lastLogin: string;
  ownedTeams: any[];
  kings: any[];
  playerTeams: any[];
  powerRanking?: number;
  seasonRecord?: string;
  personalRanking?: number;
  teamRanking?: number;
}

export async function getUserByEmail(email: string, token: string): Promise<UserData> {
  if (!email) throw new Error("Email requerido para buscar usuario");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/by-email/${encodeURIComponent(email)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("No se pudo obtener el usuario");
  return res.json();
}
