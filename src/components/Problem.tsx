"use client";

import { motion } from "framer-motion";
import { AlertTriangle, HelpCircle, FileX, DollarSign } from "lucide-react";

const pains = [
  {
    icon: HelpCircle,
    title: "¿Cuánto te pagan realmente?",
    desc: "Las liquidaciones llegan sin explicación. No sabés si el monto corresponde a lo que vendiste.",
    color: "text-amber-400",
    glow: "shadow-amber-500/20",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: FileX,
    title: "Cupones rechazados en silencio",
    desc: "Te rechaza un cupón y nadie te avisa. Te enterás semanas después, cuando ya no podés reclamar.",
    color: "text-red-400",
    glow: "shadow-red-500/20",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Contracargos sin aviso previo",
    desc: "Un cliente reclama a su banco y te descuentan el importe directo, sin notificación y sin tiempo de respuesta.",
    color: "text-orange-400",
    glow: "shadow-orange-500/20",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: DollarSign,
    title: "Tasas que nunca controlás",
    desc: "¿Pagás el arancel correcto? ¿Te retienen más de lo que corresponde? Sin control activo, esas diferencias se acumulan.",
    color: "text-violet-400",
    glow: "shadow-violet-500/20",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
];

export default function Problem() {
  return (
    <section id="problema" aria-labelledby="problem-heading" className="py-24 sm:py-32 relative overflow-hidden bg-[#020817]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(239,68,68,0.04)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
            <span className="w-8 h-px bg-red-500/50" aria-hidden="true" />
            El problema real
            <span className="w-8 h-px bg-red-500/50" aria-hidden="true" />
          </span>
          <h2 id="problem-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Cada mes perdés plata
            <br />
            <span className="text-red-400">que ya ganaste</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            El 70% de los comercios descubre diferencias cuando ya pasó el plazo de reclamo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {pains.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border glass p-6 flex gap-4 hover:bg-white/5 transition-all duration-300 group shadow-xl ${p.glow}`}
            >
              <div className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-xl border ${p.bg} group-hover:scale-110 transition-transform duration-200`}>
                <p.icon size={20} className={p.color} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base mb-1.5">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Testimonial quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 mx-auto max-w-2xl rounded-2xl border-gradient glass p-8 text-center relative"
        >
          <div aria-hidden="true" className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent" />
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="mx-auto mb-4 opacity-30">
            <path d="M10 8H4v10h6v6l6-6V8h-6zM24 8h-6v10h6v6l6-6V8h-6z" fill="currentColor" className="text-red-400"/>
          </svg>
          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-medium">
            Descubrimos que en 6 meses nos habían liquidado{" "}
            <strong className="text-white">$47.000 menos</strong> de lo que correspondía.
            Y lo peor: ya habíamos perdido el plazo para reclamar.
          </p>
          <footer className="mt-4 text-sm text-slate-500">— Dueño de ferretería, CABA</footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
