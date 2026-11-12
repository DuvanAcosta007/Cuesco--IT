export default function Hero({ onNavigate }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-170 flex flex-col justify-center py-16">
      <div className="max-w-140">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-900 bg-emerald-100 border border-emerald-200 rounded-md mb-4">
          CUESCOIT PALMA
        </span>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Control técnico e <span className="text-emerald-800">inventario de equipos</span> en planta.
        </h1>
        
        <p className="mt-4 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
          Plataforma interna para la gestión unificada de actas de entrega, seguimiento de mantenimiento e infraestructura tecnológica de la extractora.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => onNavigate('login')}
            className="h-12 px-6 inline-flex items-center justify-center rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-base transition-colors duration-200 shadow-md"
          >
            Iniciar sesión
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <a
            href="#funciones"
            className="h-12 px-6 inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 text-slate-800 hover:bg-white font-semibold text-base transition-colors duration-200"
          >
            Ver capacidades
          </a>
        </div>

        <p id="acceso" className="mt-6 text-xs text-slate-600 border-l-2 border-emerald-800 pl-3">
          Acceso restringido únicamente a personal técnico autorizado de la planta.
        </p>
      </div>
    </section>
  );
}