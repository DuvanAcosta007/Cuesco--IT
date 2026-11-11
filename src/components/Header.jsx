import React from 'react';
import { sesion } from '../utils/store';

export default function Header({ currentRoute, onNavigate }) {
  const links = [
    { id: 'dashboard', label: 'Inicio' },
    { id: 'actas', label: 'Actas' },
    { id: 'mantenimientos', label: 'Mantenimientos' }
  ];

  return (
    <header className="bg-emerald-950/90 backdrop-blur border-b border-emerald-900 px-6 py-4 flex justify-between items-center sticky top-0 z-50 text-slate-100">
      <a 
        href="#dashboard" 
        onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}
        className="flex items-center gap-3 font-bold text-lg text-white"
      >
        <span className="w-9 h-9 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-amber-400 border border-emerald-700">CP</span>
        <span>CuescoIT <span className="text-amber-400 font-normal text-sm">PALMA</span></span>
      </a>

      <nav className="hidden md:flex gap-6 text-sm font-semibold">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
            className={`pb-1 transition ${currentRoute === l.id ? 'text-amber-400 border-b-2 border-amber-400' : 'text-slate-300 hover:text-amber-300'}`}
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4 text-sm">
        <span className="font-medium text-emerald-300 hidden sm:inline">{sesion.get() || 'Técnico'}</span>
        <button 
          onClick={() => { sesion.clear(); onNavigate('login'); }}
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-1.5 rounded-lg text-xs font-bold transition border border-slate-700"
        >
          Salir
        </button>
      </div>
    </header>
  );
}