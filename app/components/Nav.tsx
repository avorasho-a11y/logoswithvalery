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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-lg text-chocolate tracking-wide">
          В. Хачатурова
        </span>
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
      </nav>
    </header>
  );
}
