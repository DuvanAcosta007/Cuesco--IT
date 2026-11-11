import { useState } from 'react';
import { Store } from '../utils/store';

export default function Mantenimientos({ onNavigate }) {
  const [ordenes, setOrdenes] = useState(() => Store.get('ordenes', [
    { id: 1, equipo: 'Báscula Principal #1', tipo: 'Preventivo', area: 'Báscula', desc: 'Calibración de celdas y limpieza de puertos RS232.', fecha: new Date() }
  ]));
  
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ equipo: '', tipo: 'Preventivo', area: '', desc: '' });

  const total = ordenes.length;
  const preventivos = ordenes.filter(o => o.tipo === 'Preventivo').length;
  const porcentaje = total > 0 ? Math.round((preventivos / total) * 100) : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaOrden = { id: Date.now(), ...formData, fecha: new Date() };
    const actualizadas = [nuevaOrden, ...ordenes];
    setOrdenes(actualizadas);
    Store.set('ordenes', actualizadas);
    setModalOpen(false);
    setFormData({ equipo: '', tipo: 'Preventivo', area: '', desc: '' });
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-950 text-slate-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Cabecera de Mantenimiento */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">Centro de Mantenimiento Técnico</h1>
            <p className="text-slate-400 text-sm mt-1">Órdenes de servicio preventivo y correctivo de la planta.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button 
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-none bg-emerald-800 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition shadow-lg shadow-emerald-950/50"
            >
              + Nueva Orden de Servicio
            </button>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition"
            >
              Volver
            </button>
          </div>
        </div>

        {/* Tarjeta de Progreso / Avance Operativo */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-bold text-white">Avance Operativo General</h2>
              <p className="text-slate-400 text-xs sm:text-sm">{preventivos} mantenimientos preventivos de {total} totales registrados.</p>
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-amber-400">{porcentaje}%</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-3 overflow-hidden border border-slate-800">
            <div 
              className="bg-amber-500 h-full transition-all duration-500 rounded-full" 
              style={{ width: `${porcentaje}%` }}
            ></div>
          </div>
        </div>

        {/* Listado de Órdenes (Grid de Tarjetas) */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Órdenes Registradas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ordenes.map((o) => (
              <div key={o.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <h3 className="text-lg font-bold text-white">{o.equipo}</h3>
                    <span className={`text-xs px-2.5 py-1 rounded-md font-semibold ${
                      o.tipo === 'Preventivo' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}>
                      {o.tipo}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium mb-2">📍 Área: <span className="text-slate-200">{o.area}</span></p>
                  <p className="text-sm text-slate-300 leading-relaxed">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal de Nueva Orden */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Nueva Orden de Servicio</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Equipo o Dispositivo</label>
                  <input 
                    type="text" 
                    value={formData.equipo} 
                    onChange={e => setFormData({...formData, equipo: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Tipo de Mantenimiento</label>
                  <select 
                    value={formData.tipo} 
                    onChange={e => setFormData({...formData, tipo: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Preventivo">Preventivo programado</option>
                    <option value="Correctivo">Correctivo urgente</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Ubicación o Área</label>
                  <input 
                    type="text" 
                    value={formData.area} 
                    onChange={e => setFormData({...formData, area: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Descripción de la Novedad</label>
                  <textarea 
                    rows="3" 
                    value={formData.desc} 
                    onChange={e => setFormData({...formData, desc: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <button 
                    type="button" 
                    onClick={() => setModalOpen(false)}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg transition"
                  >
                    Guardar Orden
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}