import { useState } from 'react';
import { sesion } from '../utils/store';

export default function Login({ onNavigate }) {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.trim()) {
      sesion.set(usuario.trim());
      onNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <main className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-white">
            CuescoIT <span className="text-amber-400">PALMA</span>
          </h1>
          <p className="text-sm text-slate-400 mt-1">Control operativo e inventario técnico</p>
          <div className="mt-4 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs p-2.5 rounded-lg">
            Modo demostración: ingresa cualquier usuario para acceder.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Usuario o Cédula</label>
            <input 
              type="text" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
              required 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-bold uppercase text-slate-300">Contraseña</label>
              <button 
                type="button" 
                onClick={() => onNavigate('reset-password')}
                className="text-xs text-emerald-400 hover:text-emerald-300 transition"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <input 
              type="password" 
              value={clave} 
              onChange={(e) => setClave(e.target.value)} 
              required 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg transition shadow-lg shadow-emerald-950/50"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="mt-6 text-center border-t border-slate-800 pt-4">
          <p className="text-xs text-slate-400">
            ¿No tienes cuenta de acceso?{' '}
            <button 
              onClick={() => onNavigate('registro')}
              className="text-amber-400 font-semibold hover:underline ml-1"
            >
              Crear nuevo usuario
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}