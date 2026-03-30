import {
  BarChart3,
  Clock,
  SearchCheck,
  TrendingUp,
  Bell,
  Handshake,
} from "lucide-react";

const items = [
  {
    icon: BarChart3,
    title: "Información confiable cada día",
    desc: "Recibís un resumen diario con todos tus cobros, liquidaciones pendientes y alertas. Sin sorpresas al fin de mes.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Ahorrás tiempo valioso",
    desc: "Dejás de cruzar planillas y llamar al banco. Nosotros procesamos todo y te entregamos lo que necesitás saber.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: SearchCheck,
    title: "Detección temprana de errores",
    desc: "Identificamos diferencias, cupones sin acreditar y retenciones incorrectas antes de que venzan los plazos de reclamo.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Mejor salud financiera",
    desc: "Con datos claros tomás mejores decisiones: qué tarjetas aceptar, qué planes ofrecer, qué aranceles negociar.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Bell,
    title: "Alertas en tiempo real",
    desc: "Te notificamos al instante cuando algo no cuadra: un pago demorado, un rechazo o una diferencia en la liquidación.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Handshake,
    title: "Un equipo que te respalda",
    desc: "Contás con profesionales que conocen el sistema de tarjetas y te acompañan en cada reclamo o consulta.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export default function Benefits() {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="py-20 sm:py-28 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Beneficios
          </p>
          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Todo lo que ganás con TarjetaControl
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            No es solo un reporte. Es control real sobre tu flujo de caja,
            tu tiempo y tu tranquilidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <article
              key={item.title}
              className="card-hover rounded-2xl bg-white border border-slate-100 p-6 flex flex-col gap-4"
            >
              <div
                className={`flex items-center justify-center w-11 h-11 rounded-xl ${item.bg} shrink-0`}
              >
                <item.icon size={22} className={item.color} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
