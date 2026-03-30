import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ahora sé exactamente cuánto me tienen que pagar. Antes revisaba el resumen bancario y me preguntaba si estaba bien o mal. Hoy tengo certeza.",
    name: "Carlos M.",
    role: "Dueño de supermercado, Rosario",
    stars: 5,
    highlight: "sé exactamente cuánto me tienen que pagar",
  },
  {
    quote:
      "En el primer mes detectaron un contracargo que no sabíamos que existía y lo resolvieron. Recuperamos $28.000 que ya dábamos por perdidos.",
    name: "Mariana L.",
    role: "Gerente de indumentaria, Córdoba",
    stars: 5,
    highlight: "Recuperamos $28.000 que ya dábamos por perdidos",
  },
  {
    quote:
      "El reporte diario que nos mandan cambió la forma en que manejamos la caja. Mi contador está feliz y yo me quedo tranquilo cuando cierro el negocio.",
    name: "Roberto A.",
    role: "Propietario de farmacia, GBA",
    stars: 5,
    highlight: "Mi contador está feliz y yo me quedo tranquilo",
  },
  {
    quote:
      "Teníamos 3 sucursales y ningún control real. TarjetaControl unificó todo. Ahora veo en un solo panel qué pasa en cada local.",
    name: "Verónica P.",
    role: "Propietaria de cadena de ropa, CABA",
    stars: 5,
    highlight: "TarjetaControl unificó todo",
  },
  {
    quote:
      "Lo que más valoramos es la respuesta rápida. Cualquier diferencia que aparece, ya están encima. No tenemos que perseguir a nadie.",
    name: "Diego F.",
    role: "Administrador de restaurante, Mendoza",
    stars: 5,
    highlight: "La respuesta rápida",
  },
  {
    quote:
      "Pensé que era un gasto más. Al mes ya había recuperado mucho más de lo que pago por el servicio. La relación costo-beneficio es impresionante.",
    name: "Laura S.",
    role: "Dueña de ferretería, Santa Fe",
    stars: 5,
    highlight: "ya había recuperado mucho más de lo que pago",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-amber-400 fill-amber-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 sm:py-28 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Lo que dicen nuestros clientes
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Más de 500 comercios ya tienen el control
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Negocios de todo tipo y tamaño que recuperaron su tranquilidad financiera.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-hover rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col"
            >
              <Quote
                size={20}
                className="text-blue-200 mb-3"
                aria-hidden="true"
              />
              <blockquote className="flex-1">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
                </div>
                <Stars count={t.stars} />
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="mt-10 mx-auto max-w-sm rounded-2xl bg-amber-50 border border-amber-100 p-5 text-center">
          <div className="flex justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-amber-400 fill-amber-400"
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="text-2xl font-bold text-slate-900 tabular">4,9 / 5</p>
          <p className="text-sm text-slate-500 mt-1">
            Basado en 500+ reseñas de comercios activos
          </p>
        </div>
      </div>
    </section>
  );
}
