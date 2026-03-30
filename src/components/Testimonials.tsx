"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { quote: "Ahora sé exactamente cuánto me tienen que pagar. Antes revisaba el resumen bancario y me preguntaba si estaba bien. Hoy tengo certeza.", name: "Carlos M.", role: "Supermercado, Rosario", stars: 5, highlight: true },
  { quote: "En el primer mes detectaron un contracargo que no sabíamos y lo resolvieron. Recuperamos $28.000 que ya dábamos por perdidos.", name: "Mariana L.", role: "Indumentaria, Córdoba", stars: 5, highlight: false },
  { quote: "El reporte diario cambió la forma en que manejo la caja. Mi contador está feliz y yo me quedo tranquilo cuando cierro el negocio.", name: "Roberto A.", role: "Farmacia, GBA", stars: 5, highlight: false },
  { quote: "Teníamos 3 sucursales y ningún control real. TarjetaControl unificó todo. Ahora veo en un solo panel qué pasa en cada local.", name: "Verónica P.", role: "Cadena de ropa, CABA", stars: 5, highlight: false },
  { quote: "Lo que más valoramos es la respuesta rápida. Cualquier diferencia que aparece, ya están encima. No tenemos que perseguir a nadie.", name: "Diego F.", role: "Restaurante, Mendoza", stars: 5, highlight: false },
  { quote: "Pensé que era un gasto más. Al mes ya había recuperado mucho más de lo que pago por el servicio. La relación costo-beneficio es impresionante.", name: "Laura S.", role: "Ferretería, Santa Fe", stars: 5, highlight: false },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-24 sm:py-32 bg-[#030b1a] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(16,185,129,0.04)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
            <span className="w-8 h-px bg-emerald-500/50" aria-hidden="true" />
            Lo que dicen nuestros clientes
            <span className="w-8 h-px bg-emerald-500/50" aria-hidden="true" />
          </span>
          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Más de 500 comercios
            <br />
            <span className="gradient-text">ya tienen el control</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-6 flex flex-col relative overflow-hidden ${
                t.highlight
                  ? "border-gradient glass-bright shadow-2xl shadow-blue-600/10"
                  : "border border-white/5 glass"
              }`}
            >
              {t.highlight && (
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/5" />
              )}
              <Quote size={20} className="text-white/10 mb-3 relative" aria-hidden="true" />
              <blockquote className="flex-1 relative">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between gap-3 relative">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5" aria-label={`${t.stars} estrellas`}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={12} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 mx-auto max-w-xs rounded-2xl border-gradient glass-bright p-6 text-center"
        >
          <div className="flex justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-amber-400 fill-amber-400" aria-hidden="true" />
            ))}
          </div>
          <p className="text-3xl font-bold text-white tabular">4,9 / 5</p>
          <p className="text-xs text-slate-500 mt-1.5">Basado en 500+ reseñas de comercios activos</p>
        </motion.div>
      </div>
    </section>
  );
}
