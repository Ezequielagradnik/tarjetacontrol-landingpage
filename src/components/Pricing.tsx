"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Comercio",
    desc: "Negocios con 1 a 2 terminales",
    price: "9.900",
    highlight: false,
    badge: null,
    features: ["Hasta 2 terminales", "Reporte diario email / WhatsApp", "Control de cupones y liquidaciones", "Alertas de diferencias", "Conciliación mensual", "1 reclamo por mes", "Soporte por WhatsApp"],
    cta: "Empezar ahora",
  },
  {
    name: "Negocio Plus",
    desc: "Mayor volumen y más control",
    price: "18.900",
    highlight: true,
    badge: "Más popular",
    features: ["Hasta 5 terminales", "Reporte diario + semanal", "Control de cupones y liquidaciones", "Alertas en tiempo real", "Conciliación mensual completa", "Reclamos ilimitados", "Asesoramiento en tasas y planes", "Soporte prioritario"],
    cta: "Quiero este plan",
  },
  {
    name: "Empresas",
    desc: "Multi-sucursal o volumen alto",
    price: null,
    highlight: false,
    badge: "A medida",
    features: ["Terminales ilimitadas", "Panel multi-sucursal", "Reportes personalizados", "Integración con sistemas", "Reclamos ilimitados", "Asesoramiento estratégico", "Account manager dedicado", "SLA garantizado"],
    cta: "Solicitar cotización",
  },
];

export default function Pricing() {
  return (
    <section id="precios" aria-labelledby="pricing-heading" className="py-24 sm:py-32 bg-[#020817] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">
            <span className="w-8 h-px bg-violet-500/50" aria-hidden="true" />
            Precios
            <span className="w-8 h-px bg-violet-500/50" aria-hidden="true" />
          </span>
          <h2 id="pricing-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Planes claros,
            <br />
            <span className="gradient-text">sin letra chica</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg">Sin permanencia mínima. La mayoría recupera el costo en el primer mes.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          {plans.map((plan, i) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-blue-600/30 scale-[1.02]"
                  : "glass border border-white/5"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                  plan.highlight ? "bg-white text-blue-700" : "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                }`}>
                  {plan.highlight && <Zap size={10} className="inline mr-1" aria-hidden="true" />}
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className={`font-bold text-xl ${plan.highlight ? "text-white" : "text-white"}`}>{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlight ? "text-blue-100" : "text-slate-400"}`}>{plan.desc}</p>
              </div>

              <div>
                {plan.price ? (
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-bold tabular ${plan.highlight ? "text-white" : "text-white"}`}>${plan.price}</span>
                    <span className={`text-sm mb-1.5 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>/mes</span>
                  </div>
                ) : (
                  <p className="text-2xl font-bold text-white">Cotización personalizada</p>
                )}
              </div>

              <ul className="space-y-2.5 flex-1" aria-label={`Incluido en ${plan.name}`}>
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white/70" : "text-emerald-400"}`} aria-hidden="true" />
                    <span className={`text-sm ${plan.highlight ? "text-blue-50" : "text-slate-400"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className={`btn-shine group inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                plan.highlight
                  ? "bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
                  : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-600/20"
              }`}>
                {plan.cta}
                <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-slate-600"
        >
          Precios en pesos argentinos. IVA no incluido. Consultá promociones para comercios nuevos.
        </motion.p>
      </div>
    </section>
  );
}
