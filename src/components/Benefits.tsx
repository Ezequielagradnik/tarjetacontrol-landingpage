"use client";

import { motion } from "framer-motion";
import { BarChart3, Clock, SearchCheck, TrendingUp, Bell, Handshake } from "lucide-react";

const items = [
  { icon: BarChart3, title: "Información confiable cada día", desc: "Resumen diario de cobros, liquidaciones y alertas. Sin sorpresas al fin de mes.", color: "text-blue-400", glow: "from-blue-600/20 to-blue-600/0", border: "border-blue-500/20" },
  { icon: Clock, title: "Ahorrás tiempo valioso", desc: "Dejás de cruzar planillas y llamar al banco. Nosotros procesamos todo.", color: "text-violet-400", glow: "from-violet-600/20 to-violet-600/0", border: "border-violet-500/20" },
  { icon: SearchCheck, title: "Detección temprana de errores", desc: "Identificamos diferencias antes de que venzan los plazos de reclamo.", color: "text-emerald-400", glow: "from-emerald-600/20 to-emerald-600/0", border: "border-emerald-500/20" },
  { icon: TrendingUp, title: "Mejor salud financiera", desc: "Con datos claros tomás mejores decisiones sobre qué tarjetas aceptar y qué aranceles negociar.", color: "text-cyan-400", glow: "from-cyan-600/20 to-cyan-600/0", border: "border-cyan-500/20" },
  { icon: Bell, title: "Alertas en tiempo real", desc: "Te notificamos al instante cuando algo no cuadra: un rechazo, una diferencia o un pago demorado.", color: "text-amber-400", glow: "from-amber-600/20 to-amber-600/0", border: "border-amber-500/20" },
  { icon: Handshake, title: "Un equipo que te respalda", desc: "Profesionales que conocen el sistema y te acompañan en cada reclamo o consulta.", color: "text-rose-400", glow: "from-rose-600/20 to-rose-600/0", border: "border-rose-500/20" },
];

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-heading" className="py-24 sm:py-32 bg-[#020817] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            <span className="w-8 h-px bg-blue-500/50" aria-hidden="true" />
            Beneficios
            <span className="w-8 h-px bg-blue-500/50" aria-hidden="true" />
          </span>
          <h2 id="benefits-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Todo lo que ganás
            <br />
            <span className="gradient-text">con TarjetaControl</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border ${item.border} glass p-6 flex flex-col gap-4 overflow-hidden group cursor-default`}
            >
              {/* Hover glow */}
              <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-200">
                <item.icon size={22} className={item.color} aria-hidden="true" />
              </div>
              <div className="relative">
                <h3 className="font-semibold text-white text-base mb-1.5">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
