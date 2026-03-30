"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
              Contacto
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              Hablemos de tu negocio
            </h2>
            <p className="mt-5 text-slate-500 text-lg leading-relaxed">
              Completá el formulario y te contactamos en menos de 24&nbsp;hs
              para entender tu situación y mostrarte cómo podemos ayudarte.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:hola@tarjetacontrol.com.ar"
                className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors text-sm"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                hola@tarjetacontrol.com.ar
              </a>
              <a
                href="https://wa.me/5491100000000?text=Hola,%20quiero%20saber%20más%20sobre%20TarjetaControl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors text-sm"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.845L0 24l6.335-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.032-1.386l-.361-.214-3.74.982.999-3.651-.236-.374A9.818 9.818 0 012.18 12C2.18 6.569 6.569 2.18 12 2.18c5.43 0 9.82 4.39 9.82 9.82 0 5.431-4.39 9.818-9.82 9.818z" />
                  </svg>
                </span>
                +54 9 11 0000-0000
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100">
                  <CheckCircle2 size={28} className="text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl">
                  ¡Mensaje recibido!
                </h3>
                <p className="text-slate-500 text-base">
                  Te contactamos en menos de 24&nbsp;hs. También podés
                  escribirnos por WhatsApp si necesitás respuesta más rápida.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-label="Formulario de contacto"
                noValidate
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Nombre y apellido
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      autoComplete="name"
                      required
                      placeholder="Juan García"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="juan@minegocio.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+54 9 11 0000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="negocio"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Tipo de negocio
                    </label>
                    <input
                      type="text"
                      id="negocio"
                      name="negocio"
                      autoComplete="organization"
                      placeholder="Farmacia, supermercado, indumentaria…"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      ¿Qué problema querés resolver?{" "}
                      <span className="text-slate-400 font-normal">(opcional)</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={3}
                      placeholder="Contanos brevemente tu situación…"
                      spellCheck={false}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm transition-colors duration-150"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Solicitar demo gratuita
                        <Send size={15} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
