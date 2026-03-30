"use client";

import { motion } from "framer-motion";

const nav = [
  { title: "Servicio", links: [{ label: "El problema", href: "#problema" }, { label: "Servicios", href: "#servicios" }, { label: "Cómo funciona", href: "#como-funciona" }, { label: "Precios", href: "#precios" }] },
  { title: "Empresa", links: [{ label: "Sobre nosotros", href: "#" }, { label: "Casos de éxito", href: "#" }, { label: "Blog", href: "#" }] },
  { title: "Legal", links: [{ label: "Privacidad", href: "#" }, { label: "Términos y condiciones", href: "#" }] },
];

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-white/5 relative overflow-hidden" role="contentinfo">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="inline-flex items-center gap-2.5 font-bold text-white text-lg mb-4" aria-label="TarjetaControl - inicio">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>
              </div>
              <span>Tarjeta<span className="gradient-text">Control</span></span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Control profesional de cobranzas y liquidaciones con tarjetas para comercios argentinos.
            </p>
            <div className="mt-5 space-y-2.5">
              <a href="mailto:hola@tarjetacontrol.com.ar" className="flex items-center gap-2 text-slate-500 hover:text-white text-sm transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                hola@tarjetacontrol.com.ar
              </a>
              <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 text-sm transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.845L0 24l6.335-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.032-1.386l-.361-.214-3.74.982.999-3.651-.236-.374A9.818 9.818 0 012.18 12C2.18 6.569 6.569 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82 0 5.431-4.39 9.818-9.82 9.818z"/></svg>
                +54 9 11 0000-0000
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-4">{col.title}</h3>
              <ul className="space-y-2.5 list-none m-0 p-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} TarjetaControl. Todos los derechos reservados.</p>
          <p className="text-xs text-slate-700">Hecho con control total en Argentina</p>
        </div>
      </div>
    </footer>
  );
}
