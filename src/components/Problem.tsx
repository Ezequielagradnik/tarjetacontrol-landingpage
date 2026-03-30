import { AlertTriangle, HelpCircle, FileX, DollarSign } from "lucide-react";

const pains = [
  {
    icon: HelpCircle,
    title: "¿Cuánto te deposita realmente el banco?",
    desc: "Las liquidaciones llegan sin explicación. No sabés si el monto que ves corresponde a lo que vendiste, y nadie te lo aclara.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: FileX,
    title: "Cupones rechazados que nunca cobras",
    desc: "Un cupón se rechaza en silencio. No hay aviso, no hay reclamo. Te enterás semanas después, cuando ya es tarde para actuar.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: AlertTriangle,
    title: "Contracargos que te sacan plata sin aviso",
    desc: "Un cliente reclama a su banco y te descuentan el monto directo. Sin notificación, sin poder responder a tiempo.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: DollarSign,
    title: "Tasas y retenciones que no controlás",
    desc: "¿Pagás el arancel correcto? ¿Te retienen más IVA del que corresponde? Sin un control activo, esas diferencias se acumulan mes a mes.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

export default function Problem() {
  return (
    <section
      id="problema"
      aria-labelledby="problem-heading"
      className="py-20 sm:py-28 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
            El problema real
          </p>
          <h2
            id="problem-heading"
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Cada mes perdés plata que ya ganaste
          </h2>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            El 70% de los comercios descubre diferencias cuando ya pasó el plazo de
            reclamo. ¿Qué estarías encontrando si tuvieras control real?
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {pains.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex gap-4"
            >
              <div
                className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-xl ${p.bg}`}
              >
                <p.icon size={20} className={p.color} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base mb-1.5">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Pull quote */}
        <blockquote className="mt-10 mx-auto max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 p-6 text-center">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            &ldquo;Descubrimos que en 6 meses nos habían liquidado{" "}
            <strong className="text-white">$47.000 menos</strong> de lo que
            correspondía. Y lo peor: ya habíamos perdido el plazo para reclamar.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-slate-500">
            — Dueño de ferretería, CABA
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
