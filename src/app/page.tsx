
"use client";
// King of the Court Landing Page

import Image from "next/image";
import Button from "@/components/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";
import Banner from "@/components/Banner";
import LeaderboardCard from "@/components/LeaderboardCard";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const router = useRouter();
  const handleLogin = async () => {
    await loginWithRedirect({ appState: { returnTo: "/dashboard" } });
  };
  const handleLogout = () => logout({ logoutParams: { returnTo: window.location.origin } });
  return (
    <>
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background backdrop-blur-md border-b border-border-dark px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined chart-1 text-3xl">sports_basketball</span>
            <h1 className="text-xl font-extrabold tracking-tighter uppercase italic">King <span className="chart-1">of the</span> Court</h1>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm font-semibold uppercase tracking-wider">
            <a className="hover:text-primary transition-colors" href="#">¿Cómo Funciona?</a>
            <a className="hover:text-primary transition-colors" href="#">Reyes Actuales</a>
            <a className="hover:text-primary transition-colors" href="#">Estadísticas</a>
            <a className="hover:text-primary transition-colors text-primary" href="#">Reclutar</a>
          </nav>
          <div className="flex items-center gap-4">
            {!isAuthenticated ? (
              <Button onClick={handleLogin}>Iniciar Sesión</Button>
            ) : (
              <Button onClick={handleLogout}>Cerrar Sesión</Button>
            )}
            <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk5QGbN5CoRNCWMb3pU2qXwRLiDCPpXKLkp-TJ0f6hcwbBAP8SwTs6NoN2LC1Mh1lDUkGB-Be_nrqPHNukPfrftlCe99XhjGlEnFTFbx_WW0lefVsD6oHEP7ZETWACF_QOACGZ7qAwFdJYrUF0yE8LvrTb-SCPslEqv-OcpRkmxs-thopAtdcNWioh4M6kFiQxX52OYFRtAsjqOlPy7nvtDtbmibUY0H-D9Q-uZ5nzE7rt0njNeZrVUvozEwdeg65iCY48sCrKNB7k"
                alt="User profile avatar basketball player"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoJ0jnf4jDiV8jjokRjuqkdowj3Wu0E_4E4q6oOMyMI2hOTUj8ROO-6xbfD7hEJA4dRWtDKl0ox3RJjnoWTnWF2vJnKZKsbCIy_DXTqYVQkxxmn56ijFyE4Cm525LCajfTdtii29XfsnBP78h7zajMWSZQDkzf0a_G5-IOAeVmj7MTedwt_rtgliztFurzNXZqSkIAPiE_o0dSbfPDDNoqdQ6_GC317ygGud__a6gBolowepbnUOwQx18jQzmO4WmyxpQNWY1cAyA-"
              alt="Urban basketball court at night with neon lights"
              fill
              className="w-full h-full object-cover brightness-50"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 urban-gradient"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-5xl">
            <div className="inline-block px-4 py-1 text-white font-bold text-xs rounded mb-6 tracking-[0.2em] uppercase">Temporada Ya Disponible</div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-6 italic tracking-tighter">
              REINA EN <br /><span className="text-white">LAS CALLES</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
              Reina en las calles. Únete a la liga urbana de baloncesto más elite y demuestra tu dominio en el asfalto. Cada victoria cuenta, cada cancha es un campo de batalla.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="w-full sm:w-auto px-10 py-4 font-black text-lg italic" style={{ fontStyle: "italic" }}>
                Unirse a la Temporada
              </Button>
              {/* <Button variant="secondary" className="w-full sm:w-auto px-10 py-4 font-bold text-lg" style={{ fontStyle: "normal" }}>
                Ver Tráiler
              </Button> */}
            </div>
          </div>
          {/* Stats Ticker */}
          <div className="absolute bottom-0 w-full">
            <Banner className="py-4 overflow-hidden animate-pulse">
              <div className="flex whitespace-nowrap items-center gap-12">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">bolt</span> 1,240 JUGADORES EN LÍNEA</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">groups</span> 312 EQUIPOS REGISTRADOS</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">location_on</span> 45 CANCHAS CONQUISTADAS</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">bolt</span> 1,240 JUGADORES EN LÍNEA</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">groups</span> 312 EQUIPOS REGISTRADOS</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined">location_on</span> 45 CANCHAS CONQUISTADAS</span>
              </div>
            </Banner>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6 lg:px-20 bg-background relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto">
            <SectionTitle overline="El Proceso" title={<>3 Pasos a la <span className="chart-1">Gloria</span></>} />
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <Card className="group hover:border-primary transition-all duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                  <span className="material-symbols-outlined chart-1 text-4xl group-hover:text-white">person_add</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 uppercase italic">1. Forma tu Equipo</h4>
                <p className="text-white leading-relaxed">Recluta el mejor talento de tu zona. Forma un equipo con química, poder y ganas de dominar. Define tu nombre, colores y logo.</p>
              </Card>
              <Card className="group hover:border-primary transition-all duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                  <span className="material-symbols-outlined chart-1 text-xl group-hover:text-white">sports_kabaddi</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 uppercase italic">2. Reta a tus Rivales</h4>
                <p className="text-white leading-relaxed">Reserva canchas en el mapa KOTC. Reta a equipos locales a partidos oficiales. Grandes apuestas, grandes recompensas. Demuestra de quién es la cancha.</p>
              </Card>
              <Card className="group hover:border-primary transition-all duration-300">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors">
                  <span className="material-symbols-outlined chart-1 text-4xl group-hover:text-white">trophy</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 uppercase italic">3. Conquista la Cancha</h4>
                <p className="text-white leading-relaxed">Gana partidos, suma puntos de reputación y sube en el ranking. Solo un equipo será coronado Rey de la ciudad al final de la temporada.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Kings Section (Leaderboard) */}
        <section className="py-24 px-6 lg:px-20 bg-background dark:bg-background-dark/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <SectionTitle overline="Nivel Élite" title={<>Reyes <span className="chart-1">Actuales</span></>} className="mb-0" />
              <Button variant="secondary" className="flex items-center gap-2 text-primary font-bold hover:underline">
                Ver Ranking Completo <span className="material-symbols-outlined">trending_flat</span>
              </Button>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <LeaderboardCard
                rank="01"
                team="Brooklyn Nightmares"
                territory="Downtown Brooklyn"
                record="24-2"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuCZTDPWM1_sua67YK_zDGoIAzKqrDIBSdwN-7SpYZLRMyFPrGEQ-VS2SfluytwZA6LvZMChVWB__s2L0Nt7picrpw3pmNJxqWrgfyBbCpTxbCpdIA-C2XKhHyTcaTSZjZ23IP9HLxgKteD-GsiiGW6oIA2uWuQ4oTtRYfIJR2sFAcI2Clx99GbKqr2s1coa_36LRw-7XEk4SCXS7u7ufeEaH8dJ3QmMJOMvwr_sIrRN1birxuhvfx1ToGtaAd4RZweaSKQyx6iRdkNF"
                borderColor="chart-1"
              />
              <LeaderboardCard
                rank="02"
                team="Harlem Heat"
                territory="Rucker Park"
                record="21-5"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuAlljE6Dha7uF3UShb9jcWdk_-cy-UtjW1A7t-3clSIJHLddbaBIhUeHLUIiRXCODj2hIS26KNmu8N2fAqrxQsvEzS8U72j5GeA6tt7tpAur3zY5KQPUSckkFi7_jnYOauiJqPRIFkMFg6beSoKHT1kCNRJSYJd5NGtJWt6ahZvGzX837zVQsGJ31MukFCFpzdnMh3f2L3m7t5Q0KWlE-LsvkwyiznhivLYx5WjRAGFATEGJYLlRn3s0OLmsovhEGpYk2M3WjVhpAP9"
                borderColor="chart-1"
              />
              <LeaderboardCard
                rank="03"
                team="Bronx Wolves"
                territory="South Bronx"
                record="19-7"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuBkz8Gak1W9D85-6kBX_y3G_wPxtjUTYaAEAE3RjtyI26rQwJMuZJmZ5y6Fx0cMOwmKdLjaha0Ju4NrlTvISvXjdPwOvoIDj99Qp5nhOhhSc56TSnyp383dFY7yQki-AD1n0I92dxa0AnqTMm0lKlVYJo9pnQWv_nwp3D54y3EyfAUwIzYgVwHUlElTkU0tlAiXIMeEGNKMpqC1dbKoqQ7A4ZecGmct5vQt5XjFzd7r5VWXbW8uNqS09tYOfy20j0RcA6v0JUugoD6Z"
                borderColor="chart-1"
              />
              <LeaderboardCard
                rank="04"
                team="Queens Royals"
                territory="Astoria Park"
                record="18-8"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuD1tEv2LstuGDESgABYIBC3PGnoJFhcAh3UUHyICax9lBnOV5kpt29ZkqrFyyahjA2Smjr3zgXX2eDIMz_JKv7vMjaU9Xk24yjZjIjCo9Y8R3Dhes92FgqtsF4xql8J5eyXK5hPd1l2L0AnHy5SzHh2_2Ap0Ic_zB1pM-WyHjzV4FG7f4bkEWI6LbK9xYImPMzwNCYgLcNeOQckEKB-68_NjjJkbcNtk-mh3Rwo7v-KdMMMsgA8Xq2YPIhmg5l_yvF0aicw_o8eFmRY"
                borderColor="chart-1"
              />
            </div>
          </div>
        </section>

        {/* Stats Counter Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-black italic mb-2">1.2K+</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">Jugadores Activos</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black italic mb-2">300+</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">Equipos Registrados</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black italic mb-2">45</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">Canchas Registradas</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-black italic mb-2">12k</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">Puntos Totales</div>
            </div>
          </div>
        </section>
        {/* Recruit Banner */}
        <section className="py-24 px-6 lg:px-20 relative overflow-hidden bg-background">
          <div className="absolute inset-0 z-0">
            {/* ...imagen... */}
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8">
              ¿Buscas un <span className="chart-1">Equipo?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              ¿Aún no tienes equipo? Únete a nuestro portal de reclutamiento para encontrar jugadores locales o busca equipos que necesiten talento nuevo.
            </p>
            <Button className="px-12 py-5 font-black text-xl italic">Encontrar un Equipo</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border-dark py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined chart-1 text-4xl">sports_basketball</span>
                <h2 className="text-2xl font-black tracking-tighter uppercase italic">King <span className="chart-1">of the</span> Court</h2>
              </div>
              <p className="text-white max-w-sm mb-8 leading-relaxed">
                La competencia de baloncesto urbano más intensa del mundo. Desde la calle hasta la fama, tu camino a la leyenda comienza aquí.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-sm">social_leaderboard</span>
                </a>
                <a className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-sm">camera</span>
                </a>
                <a className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-sm">share</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-white mb-6">Explorar</h4>
              <ul className="space-y-4 text-white font-medium">
                <li><a className="hover:text-white transition-colors" href="#">Torneos</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Mapa de Canchas</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Rankings</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Estadísticas de Jugadores</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-white mb-6">Soporte</h4>
              <ul className="space-y-4 text-white font-medium">
                <li><a className="hover:text-white transition-colors" href="#">Unirse a la Liga</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Reglas Oficiales</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Preguntas Frecuentes</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Contáctanos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white font-medium">
            <p>© 2024 King of the Court League. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
              <a className="hover:text-white transition-colors" href="#">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}