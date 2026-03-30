"use client";

import { useState, useEffect } from "react";
import { Menu, X, CreditCard } from "lucide-react";

const links = [
  { href: "#problema", label: "El problema" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-slate-900 text-lg"
          aria-label="TarjetaControl - inicio"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white">
            <CreditCard size={18} aria-hidden="true" />
          </span>
          <span>
            Tarjeta<span className="text-blue-600">Control</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contacto"
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            Contacto
          </a>
          <a
            href="#precios"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors duration-150"
          >
            Empezar ahora
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-slate-100 px-4 pb-4"
        >
          <ul className="flex flex-col gap-1 list-none m-0 p-0 mt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-slate-900 text-sm transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-600 text-sm hover:bg-slate-50 transition-colors"
            >
              Contacto
            </a>
            <a
              href="#precios"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium text-center transition-colors"
            >
              Empezar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
