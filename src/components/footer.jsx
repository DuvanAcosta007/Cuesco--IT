export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-semibold text-slate-200">CuescoIT PALMA</p>
          <p className="mt-1">Gestión de Infraestructura Tecnológica e Inventario Técnico.</p>
        </div>
        <p className="text-slate-500">
          © {new Date().getFullYear()} · Uso Interno Reservado.
        </p>
      </div>
    </footer>
  );
}