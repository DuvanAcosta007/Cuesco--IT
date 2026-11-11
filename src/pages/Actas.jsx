import { useState } from 'react';
import { sesion, Store } from '../utils/store';

export default function Actas({ onNavigate }) {
  const [formData, setFormData] = useState({
    tipo: 'Entrega',
    colaborador: '',
    cedula: '',
    area: '',
    cargo: '',
    dispositivo: '',
    modelo: '',
    serie: '',
    obs: ''
  });

  const tecnico = sesion.get() || 'Técnico';
  const fechaHoy = new Date().toLocaleDateString('es-CO');
  // eslint-disable-next-line react-hooks/purity
  const numeroActa = Math.floor(1000 + Math.random() * 9000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const actasGuardadas = Store.get('actas', []);
    const nuevaActa = { id: numeroActa, fecha: new Date(), tecnico, ...formData };
    Store.set('actas', [nuevaActa, ...actasGuardadas]);
    alert(`¡Acta #${numeroActa} guardada con éxito!`);
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-slate-950 text-slate-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Formulario Principal (2 columnas en pantallas grandes) */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="mb-6 border-b border-slate-800 pb-4">
            <h1 className="text-2xl font-extrabold text-white">Nueva Acta de Equipos</h1>
            <p className="text-sm text-slate-400 mt-1">Registra la asignación, devolución o préstamo temporal en planta.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tipo de Acta y Técnico */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Tipo de Acta</label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option>Entrega</option>
                  <option>Devolución</option>
                  <option>Préstamo temporal</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Técnico Responsable</label>
                <input 
                  type="text" 
                  value={tecnico} 
                  readOnly 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-400 cursor-not-allowed" 
                />
              </div>
            </div>

            {/* Datos del Colaborador */}
            <div>
              <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">1. Datos del Colaborador</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    value={formData.colaborador} 
                    onChange={(e) => setFormData({...formData, colaborador: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Número de Cédula</label>
                  <input 
                    type="text" 
                    value={formData.cedula} 
                    onChange={(e) => setFormData({...formData, cedula: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Área o Dependencia</label>
                  <input 
                    type="text" 
                    placeholder="Ej: Báscula, Laboratorio, Extracción…" 
                    value={formData.area} 
                    onChange={(e) => setFormData({...formData, area: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Cargo</label>
                  <input 
                    type="text" 
                    value={formData.cargo} 
                    onChange={(e) => setFormData({...formData, cargo: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
              </div>
            </div>

            {/* Datos del Equipo */}
            <div>
              <h2 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">2. Datos del Equipo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Dispositivo</label>
                  <input 
                    type="text" 
                    placeholder="Laptop, radio, impresora…" 
                    value={formData.dispositivo} 
                    onChange={(e) => setFormData({...formData, dispositivo: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Marca y Modelo</label>
                  <input 
                    type="text" 
                    value={formData.modelo} 
                    onChange={(e) => setFormData({...formData, modelo: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Número de Serie</label>
                  <input 
                    type="text" 
                    value={formData.serie} 
                    onChange={(e) => setFormData({...formData, serie: e.target.value})} 
                    required 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                  />
                </div>
              </div>
            </div>

            {/* Observaciones */}
            <div>
              <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Observaciones y Estado del Equipo</label>
              <textarea 
                rows="3" 
                value={formData.obs} 
                onChange={(e) => setFormData({...formData, obs: e.target.value})} 
                placeholder="Detalle rayones, accesorios incluidos o estado físico..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            {/* Botones de Acción */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <button 
                type="button" 
                onClick={() => onNavigate('dashboard')}
                className="px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                className="flex-1 bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg transition shadow-lg shadow-emerald-950/50"
              >
                Guardar y Generar Acta
              </button>
            </div>
          </form>
        </div>

        {/* Panel Lateral Informativo */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg font-bold text-white mb-2">Acta #{numeroActa}</h2>
            <p className="text-xs text-slate-400">Fecha de registro</p>
            <p className="text-sm font-semibold text-white mt-1">{fechaHoy}</p>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-400 mb-1">Estado inicial</p>
              <span className="inline-block bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs px-2.5 py-1 rounded-md font-semibold">
                Pendiente de firma
              </span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">Guía Rápida</h2>
            <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
              <li>Verifica el cargador y accesorios antes de entregar.</li>
              <li>Anota rayones o daños previos en las observaciones.</li>
              <li>Confirma el serial físico con la etiqueta del dispositivo.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}