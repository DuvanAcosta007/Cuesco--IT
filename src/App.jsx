import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Actas from './pages/Actas';
import Mantenimientos from './pages/Mantenimientos';
import ResetPassword from './pages/ResetPassword';
import Registro from './pages/Registro';
import { sesion } from './utils/store';

export default function App() {
  // Si no hay sesión activa, muestra el Home público; si hay sesión, redirige al Dashboard
  const [currentRoute, setCurrentRoute] = useState(() => sesion.get() ? 'dashboard' : 'home');

  // Vistas públicas que tienen su propio diseño sin el menú interno
  const publicRoutes = ['home', 'login', 'reset-password', 'registro'];
  const showInternalHeader = sesion.get() && !publicRoutes.includes(currentRoute);

  return (
    <div className="min-h-screen flex flex-col">
      {showInternalHeader && (
        <Header currentRoute={currentRoute} onNavigate={setCurrentRoute} />
      )}

      <main className="flex-1">
        {currentRoute === 'home' && <Home onNavigate={setCurrentRoute} />}
        {currentRoute === 'login' && <Login onNavigate={setCurrentRoute} />}
        {currentRoute === 'dashboard' && <Dashboard onNavigate={setCurrentRoute} />}
        {currentRoute === 'actas' && <Actas onNavigate={setCurrentRoute} />}
        {currentRoute === 'mantenimientos' && <Mantenimientos onNavigate={setCurrentRoute} />}
        {currentRoute === 'reset-password' && <ResetPassword onNavigate={setCurrentRoute} />}
        {currentRoute === 'registro' && <Registro onNavigate={setCurrentRoute} />}
      </main>
    </div>
  );
}