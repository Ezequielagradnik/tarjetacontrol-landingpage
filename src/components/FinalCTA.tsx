import { ArrowRight, Shield, Clock, Star } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden"
    >
      {/* Decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.15)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-3xl rounded-full"
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
          El momento es ahora
        </p>
        <h2
          id="cta-heading"
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight"
        >
          Empezá a tener el control
          <br />
          <span className="gradient-text">hoy mismo</span>
        </h2>
        <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
          Cada día que pasa sin control es plata que podés estar perdiendo.
          En 24&nbsp;hs tenés visibilidad total sobre tus cobros con tarjeta.
        </p>

        {/* Trust row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <Shield size={15} className="text-emerald-400" aria-hidden="true" />
            Sin permanencia mínima
          </span>
          <span className="flex items-center gap-2">
            <Clock size={15} className="text-blue-400" aria-hidden="true" />
            Activo en 24&nbsp;hs
          </span>
          <span className="flex items-center gap-2">
            <Star size={15} className="text-amber-400" aria-hidden="true" />
            4,9 / 5 en satisfacción
          </span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-colors duration-150 shadow-xl shadow-blue-600/30"
          >
            Solicitar demo gratuita
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-1"
            />
          </a>
          <a
            href="https://wa.me/5491100000000?text=Hola,%20quiero%20saber%20más%20sobre%20TarjetaControl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium text-base transition-colors duration-150"
          >
            {/* WhatsApp icon inline SVG */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="text-emerald-400"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.845L0 24l6.335-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.032-1.386l-.361-.214-3.74.982.999-3.651-.236-.374A9.818 9.818 0 012.18 12C2.18 6.569 6.569 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82 0 5.431-4.39 9.818-9.82 9.818z" />
            </svg>
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
