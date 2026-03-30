"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="py-24 sm:py-32 relative overflow-hidden bg-[#030b1a]">
      {/* Animated background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[80px] animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
            <span className="w-8 h-px bg-blue-500/50" aria-hidden="true" />
            El momento es ahora
            <span className="w-8 h-px bg-blue-500/50" aria-hidden="true" />
          </span>

          <h2 id="cta-heading" className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight">
            Empezá a tener
            <br />
            el control{" "}
            <span className="gradient-text text-glow">hoy mismo</span>
          </h2>

          <p className="mt-6 text-slate-400 text-xl leading-relaxed max-w-xl mx-auto">
            Cada día que pasa sin control es plata que podés estar perdiendo.
            En <strong className="text-white">24&nbsp;hs</strong> tenés visibilidad total sobre tus cobros.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {[
              { icon: Shield, text: "Sin permanencia mínima", color: "text-emerald-400" },
              { icon: Clock, text: "Activo en 24 hs", color: "text-blue-400" },
              { icon: Star, text: "4,9 / 5 en satisfacción", color: "text-amber-400" },
            ].map(({ icon: Icon, text, color }) => (
              <span key={text} className="flex items-center gap-2">
                <Icon size={15} className={color} aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shine group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg transition-all duration-200 shadow-2xl shadow-blue-600/40 glow-blue w-full sm:w-auto justify-center"
            >
              Solicitar demo gratuita
              <ArrowRight size={20} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="https://wa.me/5491100000000?text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20TarjetaControl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-bright text-white font-semibold text-base transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-emerald-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.845L0 24l6.335-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.032-1.386l-.361-.214-3.74.982.999-3.651-.236-.374A9.818 9.818 0 012.18 12C2.18 6.569 6.569 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82 0 5.431-4.39 9.818-9.82 9.818z"/>
              </svg>
              Hablar por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
