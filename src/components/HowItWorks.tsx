import { PhoneCall, Settings2, Bell, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Contacto inicial",
    desc: "Nos contás sobre tu negocio: cuántas terminales tenés, qué tarjetas aceptás y cuáles son tus principales problemas. Sin compromisos.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Configuración en 24 hs",
    desc: "Accedemos a tus resúmenes de tarjeta (con tu autorización) y configuramos el sistema de monitoreo personalizado para tu comercio.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Monitoreo y alertas",
    desc: "A partir del día siguiente recibís reportes diarios y alertas inmediatas ante cualquier diferencia, rechazo o contracargo detectado.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Control total y mejora continua",
    desc: "Cada mes revisamos tu situación, gestionamos reclamos y te asesoramos para optimizar tus costos y maximizar tus ingresos.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-heading"
      className="py-20 sm:py-28 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Cómo funciona
          </p>
          <h2
            id="how-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Empezás a tener control en 4 pasos
          </h2>
          <p className="mt-4 text-slate-500 text-lg leading-relaxed">
            Sin complicaciones, sin tecnicismos. En menos de 24&nbsp;hs tenés
            visibilidad real sobre tus cobros.
          </p>
        </div>

        {/* Steps — horizontal on desktop */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-slate-200"
          />

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none m-0 p-0">
            {steps.map((step, i) => (
              <li key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="relative z-10 flex flex-col items-center mb-5">
                  <div className="w-[104px] h-[104px] rounded-2xl bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center mb-3">
                    <step.icon size={28} className="text-blue-600" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-bold text-blue-600 tabular">
                    Paso {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-colors duration-150 shadow-lg shadow-blue-600/20"
          >
            Quiero empezar hoy
          </a>
        </div>
      </div>
    </section>
  );
}
