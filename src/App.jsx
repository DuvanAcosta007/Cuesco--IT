import { useState } from 'react';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Actas from './pages/Actas';
import Mantenimientos from './pages/Mantenimientos';
import ResetPassword from './pages/ResetPassword';
import Registro from './pages/Registro'; // <-- Importa el nuevo componente
import { sesion } from './utils/store';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => sesion.get() ? 'dashboard' : 'login');

  return (
    <div className="app-container">
      {sesion.get() && currentRoute !== 'login' && currentRoute !== 'reset-password' && currentRoute !== 'registro' && (
        <Header currentRoute={currentRoute} onNavigate={setCurrentRoute} />
      )}

      <main className="main-content">
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