"use client";

import { motion } from "framer-motion";
import { PhoneCall, Settings2, Bell, TrendingUp } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Contacto inicial", desc: "Nos contás sobre tu negocio: terminales, tarjetas y problemas. Sin compromisos, sin letra chica.", color: "text-blue-400", bg: "from-blue-600/20 to-transparent", border: "border-blue-500/30" },
  { icon: Settings2, title: "Configuración en 24 hs", desc: "Accedemos a tus resúmenes (con tu autorización) y configuramos el monitoreo personalizado.", color: "text-violet-400", bg: "from-violet-600/20 to-transparent", border: "border-violet-500/30" },
  { icon: Bell, title: "Monitoreo y alertas", desc: "Al día siguiente recibís reportes diarios y alertas ante cualquier diferencia, rechazo o contracargo.", color: "text-emerald-400", bg: "from-emerald-600/20 to-transparent", border: "border-emerald-500/30" },
  { icon: TrendingUp, title: "Control total", desc: "Cada mes revisamos tu situación, gestionamos reclamos y optimizamos tus costos.", color: "text-cyan-400", bg: "from-cyan-600/20 to-transparent", border: "border-cyan-500/30" },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="how-heading" className="py-24 sm:py-32 bg-[#020817] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
            <span className="w-8 h-px bg-cyan-500/50" aria-hidden="true" />
            Cómo funciona
            <span className="w-8 h-px bg-cyan-500/50" aria-hidden="true" />
          </span>
          <h2 id="how-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Empezás a tener control
            <br />
            <span className="gradient-text">en 4 pasos simples</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg">En menos de 24&nbsp;hs tenés visibilidad total sobre tus cobros.</p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div aria-hidden="true" className="hidden lg:block absolute top-14 left-[17%] right-[17%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 via-emerald-500/20 to-cyan-500/20" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
              style={{ originX: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400/60 via-violet-400/60 via-emerald-400/60 to-cyan-400/60"
            />
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none m-0 p-0">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    className={`relative w-28 h-28 rounded-2xl border ${step.border} glass flex items-center justify-center overflow-hidden`}
                  >
                    <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${step.bg}`} />
                    <step.icon size={32} className={`relative ${step.color}`} aria-hidden="true" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center" aria-hidden="true">
                    <span className="text-[10px] font-bold text-slate-400 tabular">{i + 1}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <a href="#contacto" className="btn-shine group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base transition-all duration-200 shadow-2xl shadow-blue-600/30 glow-blue">
            Quiero empezar hoy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
