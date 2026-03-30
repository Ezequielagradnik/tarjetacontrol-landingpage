"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, X } from "lucide-react";

const without = [
  "Revisás el resumen bancario una vez al mes",
  "No sabés qué cupones fueron rechazados",
  "Los contracargos te sorprenden",
  "Perdés plata sin saberlo",
];

const with_ = [
  "Sabés exactamente cuánto te depositaron cada día",
  "Cada cupón es verificado en tiempo real",
  "Los contracargos se gestionan antes de que venzan",
  "Recuperás todo lo que te pertenece",
];

export default function Solution() {
  return (
    <section aria-labelledby="solution-heading" className="py-24 sm:py-32 relative overflow-hidden bg-[#030b1a]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(37,99,235,0.07)_0%,transparent_70%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />

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
            La solución
            <span className="w-8 h-px bg-blue-500/50" aria-hidden="true" />
          </span>
          <h2 id="solution-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Tu equipo de control
            <br />
            <span className="gradient-text">financiero diario</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            Procesamos cada transacción y te entregamos información clara todos los días.
            Vos enfocate en tu negocio; nosotros en que cobres todo.
          </p>
        </motion.div>

        {/* Before / After comparison */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
                <X size={14} className="text-red-400" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-red-400 uppercase tracking-wider">Sin TarjetaControl</p>
            </div>
            <ul className="space-y-3">
              {without.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="w-4 h-4 rounded-full border border-red-500/40 flex items-center justify-center shrink-0" aria-hidden="true">
                    <X size={9} className="text-red-500" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6 relative overflow-hidden"
          >
            <div aria-hidden="true" className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-emerald-400" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Con TarjetaControl</p>
            </div>
            <ul className="space-y-3">
              {with_.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a href="#contacto" className="btn-shine group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base transition-all duration-200 shadow-2xl shadow-blue-600/30 glow-blue">
            Quiero tener el control
            <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
