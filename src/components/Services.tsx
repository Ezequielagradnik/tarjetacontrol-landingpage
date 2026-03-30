"use client";

import { motion } from "framer-motion";
import { CreditCard, Receipt, FileText, RefreshCw, MessageSquareWarning, Percent } from "lucide-react";

const services = [
  { icon: CreditCard, title: "Control diario de cobranzas", desc: "Monitoreamos cada acreditación de Visa, Mastercard, Amex y débito. Verificamos que cada venta se acredite en tiempo y forma.", badge: "Diario", badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/20", iconColor: "text-blue-400" },
  { icon: Receipt, title: "Control de cupones", desc: "Verificamos que cada cupón presentado haya sido procesado correctamente. Detectamos rechazos, duplicados y pendientes.", badge: "Tiempo real", badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20", iconColor: "text-emerald-400" },
  { icon: FileText, title: "Reportes personalizados", desc: "Informes por sucursal, por tarjeta, por fecha. Listos para tu contador o para tu análisis.", badge: "A medida", badgeColor: "bg-violet-500/15 text-violet-300 border-violet-500/20", iconColor: "text-violet-400" },
  { icon: RefreshCw, title: "Conciliación mensual", desc: "Al cierre de cada mes cotejamos todas tus ventas contra las liquidaciones recibidas. Sin errores ni diferencias.", badge: "Mensual", badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/20", iconColor: "text-amber-400" },
  { icon: MessageSquareWarning, title: "Gestión de reclamos", desc: "Gestionamos contracargos y diferencias directamente con las emisoras, respetando plazos y requisitos.", badge: "Incluido", badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/20", iconColor: "text-rose-400" },
  { icon: Percent, title: "Asesoramiento en tasas", desc: "Te orientamos sobre aranceles, planes de cuotas, financiación y cómo optimizar tus costos de procesamiento.", badge: "Estratégico", badgeColor: "bg-sky-500/15 text-sky-300 border-sky-500/20", iconColor: "text-sky-400" },
];

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-heading" className="py-24 sm:py-32 bg-[#030b1a] relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(139,92,246,0.04)_0%,transparent_70%)]" />

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
            Nuestros servicios
            <span className="w-8 h-px bg-violet-500/50" aria-hidden="true" />
          </span>
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Todo en
            <span className="gradient-text"> un solo lugar</span>
          </h2>
          <p className="mt-5 text-slate-400 text-lg">Un servicio integral para que no pierdas nada de lo que vendiste.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-white/5 glass p-6 flex flex-col gap-4 group hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-200">
                  <s.icon size={22} className={s.iconColor} aria-hidden="true" />
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${s.badgeColor}`}>{s.badge}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-base mb-1.5">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
