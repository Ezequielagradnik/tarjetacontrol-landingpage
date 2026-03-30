import {
  CreditCard,
  Receipt,
  FileText,
  RefreshCw,
  MessageSquareWarning,
  Percent,
} from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Control diario de cobranzas",
    desc: "Monitoreamos cada acreditación de Visa, Mastercard, American Express y tarjetas de débito. Verificamos que cada venta se acredite en tiempo y forma.",
    badge: "Diario",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: Receipt,
    title: "Control de cupones",
    desc: "Verificamos que cada cupón presentado haya sido procesado correctamente. Detectamos rechazos, duplicados y transacciones pendientes.",
    badge: "Tiempo real",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: FileText,
    title: "Reportes personalizados",
    desc: "Generamos informes adaptados a tu negocio: por sucursal, por tarjeta, por rango de fechas. Listos para tu contador o para tu análisis.",
    badge: "A medida",
    badgeColor: "bg-violet-100 text-violet-700",
  },
  {
    icon: RefreshCw,
    title: "Conciliación mensual",
    desc: "Al cierre de cada mes cotejamos todas tus ventas contra las liquidaciones recibidas. Sin errores, sin diferencias sin explicación.",
    badge: "Mensual",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: MessageSquareWarning,
    title: "Gestión de reclamos",
    desc: "Gestionamos contracargos, rechazos y diferencias directamente con las emisoras de tarjetas, respetando plazos y requisitos formales.",
    badge: "Incluido",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    icon: Percent,
    title: "Asesoramiento en tasas y planes",
    desc: "Te orientamos sobre aranceles, planes de cuotas, financiación y cómo optimizar tus costos de procesamiento de tarjetas.",
    badge: "Estratégico",
    badgeColor: "bg-sky-100 text-sky-700",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="py-20 sm:py-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Nuestros servicios
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Todo lo que necesitás en un solo lugar
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            Un servicio integral para que no pierdas nada de lo que vendiste.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="card-hover rounded-2xl border border-slate-100 bg-white p-6 flex flex-col gap-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 shrink-0">
                  <s.icon size={22} className="text-slate-700" aria-hidden="true" />
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.badgeColor}`}
                >
                  {s.badge}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base mb-1.5">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
