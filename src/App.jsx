import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Actas from './pages/Actas';
import Mantenimientos from './pages/Mantenimientos';
import ResetPassword from './pages/ResetPassword';
import Registro from './pages/Registro';
import { sesion } from './utils/store';

export default function App() {
  // Si no hay sesión, arranca en 'home' en lugar de 'login'
  const [currentRoute, setCurrentRoute] = useState(() => sesion.get() ? 'dashboard' : 'home');

  return (
    <div className="app-container">
      {sesion.get() && currentRoute !== 'home' && currentRoute !== 'login' && currentRoute !== 'reset-password' && currentRoute !== 'registro' && (
        <Header currentRoute={currentRoute} onNavigate={setCurrentRoute} />
      )}

      <main className="main-content">
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