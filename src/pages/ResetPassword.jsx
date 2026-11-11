import { useState } from 'react';

export default function ResetPassword({ onNavigate }) {
  const [enviado, setEnviado] = useState(false);
  const [correo, setCorreo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (correo.trim()) {
      setEnviado(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      <main className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-white">Recuperar Acceso</h1>
          <p className="text-sm text-slate-400 mt-1">CuescoIT PALMA · Soporte Técnico</p>
        </div>

        {enviado ? (
          <div className="space-y-4 text-center">
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm p-4 rounded-xl">
              ¡Instrucciones enviadas! Revisa tu correo o comunícate con el administrador principal de sistemas para restablecer tu clave.
            </div>
            <button 
              onClick={() => onNavigate('login')}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 rounded-lg transition"
            >
              Volver al inicio de sesión
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-300 mb-1">Correo o Cédula Registrada</label>
              <input 
                type="text" 
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)} 
                placeholder="ejemplo@cuescoit.com"
                required 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg transition shadow-lg shadow-emerald-950/50"
            >
              Enviar instrucciones
            </button>

            <button 
              type="button" 
              onClick={() => onNavigate('login')}
              className="w-full text-xs text-slate-400 hover:text-white transition pt-2"
            >
              &larr; Volver al login
            </button>
          </form>
        )}
      </main>
    </div>
  );
}