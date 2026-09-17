const works = [
  { title: "Анализ романа Р. Гари «Обещание на рассвете». Научная статья", href: "/files/roman-obeshanie-na-rassvete.pdf" },
  { title: "Анализ цитаты Ирвина Ялома. Эссе", href: "/files/citata-yaloma.pdf" },
  { title: "Концепция трехмерной личности человека. Эссе", href: "/files/trehmernaya-lichnost.pdf" },
  { title: "Свобода от обязательных приятных переживаний. Эссе", href: "/files/svoboda-ot-priyatnyh.pdf" },
  { title: "Анализ фильма «Список Шиндлера». Эссе", href: "/files/film-shindler.pdf" },
  { title: "Анализ фильма «Вам и не снилось». Эссе", href: "/files/film-vam-ne-snilos.pdf" },
];

export default function MyWorks() {
  return (
    <section className="py-12 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 md:mb-14">
          <p className="section-label mb-2">Мои работы</p>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-chocolate">
            Мои работы
          </h2>
        </div>
        <ul className="space-y-3">
          {works.map((work, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-warm-brown shrink-0 mt-0.5">·</span>
              <a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-chocolate hover:text-dark underline underline-offset-4 decoration-chocolate/30 hover:decoration-dark/60 transition-colors leading-snug"
              >
                {work.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
