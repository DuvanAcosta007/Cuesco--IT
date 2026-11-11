import { useState } from 'react';

export default function Registro({ onNavigate }) {
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    cargo: '',
    clave: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Usuario registrado con éxito! Ahora puedes iniciar sesión.');
    onNavigate('login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <main className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-white">Nuevo Usuario</h1>
          <p className="text-sm text-slate-400 mt-1">CuescoIT PALMA · Registro de Personal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Nombre Completo</label>
            <input 
              type="text" 
              value={formData.nombre} 
              onChange={e => setFormData({...formData, nombre: e.target.value})} 
              required 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Número de Cédula</label>
            <input 
              type="text" 
              value={formData.cedula} 
              onChange={e => setFormData({...formData, cedula: e.target.value})} 
              required 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Cargo o Área</label>
            <input 
              type="text" 
              value={formData.cargo} 
              onChange={e => setFormData({...formData, cargo: e.target.value})} 
              required 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Contraseña de Acceso</label>
            <input 
              type="password" 
              value={formData.clave} 
              onChange={e => setFormData({...formData, clave: e.target.value})} 
              required 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg transition shadow-lg shadow-emerald-950/50"
          >
            Registrar cuenta
          </button>

          <button 
            type="button" 
            onClick={() => onNavigate('login')}
            className="w-full text-xs text-slate-400 hover:text-white transition pt-2"
          >
            &larr; Ya tengo cuenta, iniciar sesión
          </button>
        </form>
      </main>
    </div>
  );
}