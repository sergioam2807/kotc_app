export async function getRegions() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/regions`);
  console.log("Fetching regions from:", `${process.env.NEXT_PUBLIC_API_BASE_URL}/regions`);
  console.log("Response status:", res);
  if (!res.ok) throw new Error("Error al obtener regiones");
  return res.json();
}

export interface FieldData {
  name: string;
  latitude: number;
  longitude: number;
  photoUrl: string;
  isPaid: boolean;
  price: number;
  comunaId: number;
  userId?: number;
}

export async function registerField(fieldData: FieldData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/fields`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fieldData),
  });
  if (!res.ok) throw new Error("Error al registrar cancha");
  return res.json();
}
