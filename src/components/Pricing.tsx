import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Comercio",
    desc: "Ideal para negocios con 1 a 2 terminales",
    price: "9.900",
    period: "mes",
    highlight: false,
    badge: null,
    features: [
      "Hasta 2 terminales monitoreadas",
      "Reporte diario por email / WhatsApp",
      "Control de cupones y liquidaciones",
      "Alertas de diferencias y rechazos",
      "Conciliación mensual",
      "1 reclamo por mes incluido",
      "Soporte por WhatsApp",
    ],
    cta: "Empezar ahora",
    ctaHref: "#contacto",
  },
  {
    name: "Negocio Plus",
    desc: "Para comercios con mayor volumen",
    price: "18.900",
    period: "mes",
    highlight: true,
    badge: "Más popular",
    features: [
      "Hasta 5 terminales monitoreadas",
      "Reporte diario + resumen semanal",
      "Control de cupones y liquidaciones",
      "Alertas en tiempo real",
      "Conciliación mensual completa",
      "Reclamos ilimitados",
      "Asesoramiento en tasas y planes",
      "Soporte prioritario",
    ],
    cta: "Quiero este plan",
    ctaHref: "#contacto",
  },
  {
    name: "Empresas",
    desc: "Multi-sucursal o volumen alto",
    price: null,
    period: null,
    highlight: false,
    badge: "A medida",
    features: [
      "Terminales ilimitadas",
      "Panel unificado multi-sucursal",
      "Reportes personalizados",
      "Integración con sistemas de gestión",
      "Reclamos ilimitados",
      "Asesoramiento estratégico",
      "Account manager dedicado",
      "SLA garantizado",
    ],
    cta: "Solicitar cotización",
    ctaHref: "#contacto",
  },
];

export default function Pricing() {
  return (
    <section
      id="precios"
      aria-labelledby="pricing-heading"
      className="py-20 sm:py-28 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Precios
          </p>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Planes claros, sin letra chica
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            Sin permanencia mínima. Podés cancelar cuando quieras.
            La mayoría de nuestros clientes recupera el costo del servicio
            en el primer mes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col gap-5 relative ${
                plan.highlight
                  ? "bg-blue-600 text-white shadow-2xl shadow-blue-600/30 ring-2 ring-blue-600"
                  : "bg-white border border-slate-100 shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                    plan.highlight
                      ? "bg-amber-400 text-amber-900"
                      : "bg-slate-800 text-white"
                  }`}
                >
                  {plan.badge === "Más popular" && (
                    <Zap size={11} className="inline mr-1" aria-hidden="true" />
                  )}
                  {plan.badge}
                </div>
              )}

              <div>
                <h3
                  className={`font-bold text-lg ${
                    plan.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlight ? "text-blue-200" : "text-slate-500"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div>
                {plan.price ? (
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-3xl font-bold tabular ${
                        plan.highlight ? "text-white" : "text-slate-900"
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`text-sm mb-1 ${
                        plan.highlight ? "text-blue-200" : "text-slate-500"
                      }`}
                    >
                      /{plan.period}
                    </span>
                  </div>
                ) : (
                  <p
                    className={`text-2xl font-bold ${
                      plan.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Cotización personalizada
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1" aria-label={`Incluido en el plan ${plan.name}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlight ? "text-blue-200" : "text-emerald-500"
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-blue-100" : "text-slate-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`group inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-semibold text-sm transition-colors duration-150 ${
                  plan.highlight
                    ? "bg-white text-blue-700 hover:bg-blue-50"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Precios expresados en pesos argentinos. IVA no incluido.
          Consultá nuestras promociones para comercios nuevos.
        </p>
      </div>
    </section>
  );
}
