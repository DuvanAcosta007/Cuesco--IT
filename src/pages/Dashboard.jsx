import { sesion } from '../utils/store';

export default function Dashboard({ onNavigate }) {
  const usuarioActual = sesion.get() || 'Técnico';

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-950 text-slate-100 p-6 md:p-8">
      {/* Banner de Bienvenida */}
      <section className="bg-linear-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-900/50 rounded-2xl p-6 md:p-8 shadow-xl mb-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Bienvenido, <span className="text-emerald-400">{usuarioActual}</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base">
            Panel de control general de inventario y soporte técnico en <span className="text-amber-400 font-semibold">CuescoIT PALMA</span>.
          </p>
        </div>
      </section>

      {/* Tarjetas de Navegación Principal */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta Gestión de Actas */}
        <div 
          onClick={() => onNavigate('actas')}
          className="group bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
              📄
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              Gestión de Actas
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Registra la entrega, devolución o préstamo temporal de equipos informáticos en la planta.
            </p>
          </div>
          <div className="mt-6 flex items-center text-sm font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
            Ir a Actas &rarr;
          </div>
        </div>

        {/* Tarjeta Mantenimientos */}
        <div 
          onClick={() => onNavigate('mantenimientos')}
          className="group bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
              🔧
            </div>
            <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              Mantenimientos
            </h2>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Consulta y administra las órdenes de servicio preventivo y correctivo de los equipos.
            </p>
          </div>
          <div className="mt-6 flex items-center text-sm font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
            Ir a Mantenimientos &rarr;
          </div>
        </div>
      </section>
    </div>
  );
}