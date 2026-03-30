"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react";

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + increment, target);
          setCount(Math.floor(current));
          if (current >= target) clearInterval(timer);
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="tabular">{prefix}{count.toLocaleString("es-AR")}{suffix}</span>;
}


export default function Hero() {
  return (
    <section className="mesh-bg relative min-h-screen flex items-center pt-16 overflow-hidden" aria-labelledby="hero-heading">

      {/* Animated orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-emerald-500/15 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[150px]" />

      {/* Grid overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-gradient text-xs font-medium text-blue-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                Servicio profesional para comercios argentinos
              </div>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Controlá
              <br />
              <span className="gradient-text text-glow">cada peso</span>
              <br />
              <span className="text-slate-200">que vendiste</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg"
            >
              Liquidaciones incorrectas, contracargos ignorados, cupones rechazados en silencio.
              TarjetaControl te da <strong className="text-slate-200">visibilidad total</strong> sobre tus cobros con tarjeta — todos los días.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contacto"
                className="btn-shine group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base transition-all duration-200 shadow-2xl shadow-blue-600/40 glow-blue"
              >
                Solicitar demo gratuita
                <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass glass-bright text-slate-200 font-medium text-base transition-all duration-200 hover:border-white/20"
              >
                Ver cómo funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {[
                { icon: ShieldCheck, text: "Sin permanencia", color: "text-emerald-400" },
                { icon: Zap, text: "Activo en 24 hs", color: "text-blue-400" },
                { icon: TrendingUp, text: "ROI mes 1", color: "text-violet-400" },
              ].map(({ icon: Icon, text, color }) => (
                <span key={text} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Icon size={13} className={color} aria-hidden="true" />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Glow behind card */}
            <div aria-hidden="true" className="absolute inset-0 -m-8 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 blur-3xl rounded-3xl" />

            <div className="relative rounded-2xl overflow-hidden border-gradient glass-bright shadow-2xl shadow-black/50">
              {/* Window bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/70" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" aria-hidden="true" />
                <span className="ml-3 text-xs text-slate-500 font-mono">TarjetaControl — Panel de control</span>
              </div>

              <div className="p-5">
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Resumen del día</p>
                    <p className="text-sm font-semibold text-white">Marzo 2026</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    En vivo
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Cobrado hoy", value: "$284.500", change: "+12%", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
                    { label: "Pendiente", value: "$18.300", change: "2 cupones", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
                    { label: "Alerta", value: "1 error", change: "contracargo", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
                  ].map(item => (
                    <div key={item.label} className={`rounded-xl p-3 border ${item.bg}`}>
                      <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                      <p className={`text-sm font-bold tabular ${item.color}`}>{item.value}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{item.change}</p>
                    </div>
                  ))}
                </div>

                {/* Mini chart bars */}
                <div className="mb-4">
                  <div className="flex items-end gap-1 h-12">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100, 88, 72].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.04, duration: 0.4, ease: "easeOut" }}
                        className="flex-1 rounded-sm bg-gradient-to-t from-blue-600/60 to-cyan-400/60"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">Últimas 2 semanas</p>
                </div>

                {/* Alert */}
                <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 px-3.5 py-3 flex items-start gap-2.5">
                  <ShieldCheck size={15} className="text-blue-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-xs text-blue-300">
                    <strong className="text-blue-200">Diferencia detectada:</strong> Liquidación Visa 28/03 es{" "}
                    <strong className="text-white">$3.200 menor</strong> a lo esperado. Reclamo iniciado.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 glass-bright rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl border-gradient"
              aria-hidden="true"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp size={16} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Recuperado este mes</p>
                <p className="text-sm font-bold text-emerald-400 tabular">+$47.200</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
        >
          {[
            { value: 500, suffix: "+", label: "comercios activos", prefix: "" },
            { value: 98, suffix: "%", label: "satisfacción del cliente", prefix: "" },
            { value: 47, suffix: "K+", label: "pesos recuperados en promedio", prefix: "$" },
          ].map((s, i) => (
            <div key={i} className="glass py-6 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="text-xs text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
