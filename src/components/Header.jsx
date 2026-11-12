export default function Header({ currentRoute, onNavigate }) {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-900 border border-emerald-700 flex items-center justify-center font-bold text-amber-400 text-xs">
          CP
        </div>
        <span className="text-white font-bold tracking-tight">
          CuescoIT <span className="text-amber-400 font-normal text-xs uppercase tracking-widest ml-1">PALMA</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <button 
          onClick={() => onNavigate('home')} 
          className={`hover:text-white transition ${currentRoute === 'home' ? 'text-amber-400 font-bold' : ''}`}
        >
          Inicio
        </button>
        <button 
          onClick={() => onNavigate('dashboard')} 
          className={`hover:text-white transition ${currentRoute === 'dashboard' ? 'text-amber-400 font-bold' : ''}`}
        >
          Dashboard
        </button>
        <button 
          onClick={() => onNavigate('actas')} 
          className={`hover:text-white transition ${currentRoute === 'actas' ? 'text-amber-400 font-bold' : ''}`}
        >
          Actas
        </button>
        <button 
          onClick={() => onNavigate('mantenimientos')} 
          className={`hover:text-white transition ${currentRoute === 'mantenimientos' ? 'text-amber-400 font-bold' : ''}`}
        >
          Mantenimientos
        </button>
      </nav>

      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400 hidden sm:inline">Duvan Acosta</span>
        <button 
          onClick={() => {
            localStorage.clear();
            onNavigate('home');
          }}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}