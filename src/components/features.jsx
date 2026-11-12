const funciones = [
  {
    titulo: "Gestión de Actas",
    descripcion: "Registra la entrega, devolución o préstamo temporal de equipos informáticos.",
    borde: "border-t-emerald-800"
  },
  {
    titulo: "Órdenes de Mantenimiento",
    descripcion: "Administra los mantenimientos preventivos y correctivos de la infraestructura.",
    borde: "border-t-amber-600"
  },
  {
    titulo: "Hoja de Vida Hardware",
    descripcion: "Monitorea el estado técnico, ubicación y responsable de cada dispositivo.",
    borde: "border-t-emerald-800"
  },
  {
    titulo: "Control Operativo",
    descripcion: "Optimiza el tiempo de respuesta y soporte para asegurar la continuidad en planta.",
    borde: "border-t-amber-600"
  }
];

export default function Features() {
  return (
    <section id="funciones" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Capacidades del Sistema
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Módulos diseñados para el seguimiento integral de activos tecnológicos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {funciones.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-[18px] border border-slate-200 border-t-4 ${item.borde} p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.titulo}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}