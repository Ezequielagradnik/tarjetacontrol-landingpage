import { CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Información diaria de tus cobros y liquidaciones",
  "Alertas inmediatas ante errores o diferencias",
  "Gestión de reclamos antes de que venzan los plazos",
  "Reportes claros para vos y tu contador",
  "Asesoramiento en tasas, planes y financiación",
  "Un equipo experto que trabaja para tu negocio",
];

export default function Solution() {
  return (
    <section
      aria-labelledby="solution-heading"
      className="py-20 sm:py-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
              La solución
            </p>
            <h2
              id="solution-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              TarjetaControl: tu equipo de
              <br />
              <span className="gradient-text">control financiero</span> diario
            </h2>
            <p className="mt-5 text-slate-500 text-lg leading-relaxed">
              Nos conectamos con tus terminales, procesamos cada transacción y
              te entregamos información clara todos los días. Vos enfocate en tu
              negocio; nosotros nos encargamos de que cobres todo lo que vendiste.
            </p>
            <ul className="mt-8 space-y-3" aria-label="Beneficios de TarjetaControl">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-colors duration-150 shadow-lg shadow-blue-600/20"
            >
              Empezar ahora
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right: visual comparison */}
          <div className="space-y-4">
            {/* Without TC */}
            <div className="rounded-2xl border border-red-100 bg-red-50/50 p-5 sm:p-6">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-3">
                Sin TarjetaControl
              </p>
              <ul className="space-y-2.5">
                {[
                  "Revisás el resumen bancario una vez al mes",
                  "No sabés qué cupones fueron rechazados",
                  "Los contracargos te sorprenden",
                  "Perdés plata sin saberlo",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-red-700"
                  >
                    <span
                      className="w-4 h-4 rounded-full bg-red-200 flex items-center justify-center text-red-500 text-xs font-bold shrink-0"
                      aria-hidden="true"
                    >
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* With TC */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 sm:p-6 shadow-lg shadow-emerald-100/50">
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Con TarjetaControl
              </p>
              <ul className="space-y-2.5">
                {[
                  "Sabés exactamente cuánto te depositaron cada día",
                  "Cada cupón es verificado en tiempo real",
                  "Los contracargos se gestionan antes de que venzan",
                  "Recuperás lo que te pertenece",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-emerald-800"
                  >
                    <span
                      className="w-4 h-4 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-600 text-xs font-bold shrink-0"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
