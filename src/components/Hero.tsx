import { ArrowRight, ShieldCheck, TrendingUp, Clock } from "lucide-react";

const stats = [
  { value: "+500", label: "comercios activos" },
  { value: "98%", label: "satisfacción" },
  { value: "$0", label: "pérdidas no detectadas" },
];

export default function Hero() {
  return (
    <section
      className="hero-gradient relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-blue-50 opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-emerald-50 opacity-50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
            <ShieldCheck size={13} aria-hidden="true" />
            Servicio profesional para comercios argentinos
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]"
          >
            Controlá cada peso de{" "}
            <span className="gradient-text">tus ventas con tarjeta</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Cada día perdés plata sin saberlo: liquidaciones incorrectas, contracargos
            sin respuesta, cupones rechazados silenciosamente.{" "}
            <strong className="text-slate-700 font-medium">
              TarjetaControl te da visibilidad total sobre tus cobros con tarjetas.
            </strong>
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-colors duration-150 shadow-lg shadow-blue-600/20"
            >
              Solicitar demo gratuita
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white text-slate-700 font-medium text-base transition-colors duration-150"
            >
              Ver cómo funciona
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-500" aria-hidden="true" />
              Sin permanencia mínima
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-blue-500" aria-hidden="true" />
              Configuración en 24&nbsp;hs
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp size={13} className="text-blue-500" aria-hidden="true" />
              ROI positivo desde el mes&nbsp;1
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 tabular">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Hero visual — mock dashboard card */}
        <div className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-50 border-b border-slate-100">
              <span className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-amber-400" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="ml-3 text-xs text-slate-400 font-mono">
                tarjetacontrol.com.ar — Panel de control
              </span>
            </div>
            {/* Dashboard content */}
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-slate-800">
                  Resumen del día — Marzo 2026
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                  ● En vivo
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Cobrado hoy", value: "$284.500", trend: "+12%", color: "text-emerald-600" },
                  { label: "Pendiente", value: "$18.300", trend: "2 cupones", color: "text-amber-600" },
                  { label: "Alertas", value: "1 error", trend: "contracargo", color: "text-red-500" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-slate-50 p-3 sm:p-4"
                  >
                    <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                    <p className={`text-sm sm:text-base font-bold tabular ${item.color}`}>
                      {item.value}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.trend}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-blue-50 border border-blue-100 px-4 py-3 flex items-start gap-3">
                <ShieldCheck size={16} className="text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-xs text-blue-700">
                  <strong>Diferencia detectada:</strong> Liquidación de Visa del 28/03 es{" "}
                  <strong>$3.200 menor</strong> a lo esperado. Reclamo iniciado automáticamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
