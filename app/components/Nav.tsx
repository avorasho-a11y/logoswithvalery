"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#education", label: "Образование" },
  { href: "#works-with", label: "С чем работаю" },
  { href: "#logotherapy", label: "Логотерапия" },
  { href: "#contacts", label: "Контакты" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled && !open ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-lg text-chocolate tracking-wide">
            В. Хачатурова
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm tracking-widest uppercase text-dark/70 hover:text-chocolate transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contacts"
            className="hidden md:block text-sm px-5 py-2 border border-chocolate text-chocolate hover:bg-chocolate hover:text-cream transition-all tracking-wider"
          >
            Записаться
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
          >
            <span
              className={`block w-6 h-px bg-chocolate transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-chocolate transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-chocolate transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-chocolate flex flex-col justify-center px-10 transition-all duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-2">
          {links.map((l, i) => (
            <li
              key={l.href}
              className={`transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-cream/90 hover:text-cream block py-3 border-b border-cream/10"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacts"
          onClick={() => setOpen(false)}
          className="mt-12 inline-block px-8 py-4 bg-cream text-chocolate text-sm tracking-widest uppercase text-center"
        >
          Записаться на консультацию
        </a>
      </div>
    </>
  );
}
