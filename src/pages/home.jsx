import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/hero';
import Features from '../components/features';
import Footer from '../components/footer';
import backgroundImage from '../assets/imagen home.jpg';

export default function Home({ onNavigate }) {
  useEffect(() => {
    document.title = "Cuesco-IT PALMA · Control e Inventario Técnico";
  }, []);

  return (
    <div className="relative min-h-screen font-sans antialiased bg-slate-100 text-slate-900 selection:bg-emerald-800 selection:text-white">
      
      {/* Fondo fijo con imagen y velo de lectura */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 z-0 bg-cover bg-right md:bg-center bg-no-repeat bg-slate-200"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-slate-100 via-slate-100/90 to-transparent" />
      </div>

      {/* Capa de contenido */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header onNavigate={onNavigate} />
        
        <main className="flex-1">
          <Hero onNavigate={onNavigate} />
          
          <div className="bg-slate-50 border-t border-slate-200 shadow-2xl">
            <Features />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}