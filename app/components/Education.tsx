const items = [
  {
    years: "2024–2026",
    place: "Высшая школа логотерапии МИПа",
    degree: "Логотерапия и экзистенциальный анализ",
    note: "в процессе",
  },
  {
    years: "2022–2026",
    place: "Московский институт психоанализа",
    degree: "Бакалавр психологии",
    note: "Психологическое консультирование и психотерапия",
  },
  {
    years: "2023–2024",
    place: "Повышение квалификации",
    degree: "Психоанализ в практической деятельности",
    note: "Диплом",
  },
  {
    years: "2004–2009",
    place: "МГЮА",
    degree: "Юрист",
    note: "Специалист",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 md:mb-14">
          <p className="section-label mb-2">Моё образование</p>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-chocolate">
            Образование
          </h2>
        </div>

        {/* Mobile: stacked list */}
        <div className="md:hidden">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 border-b border-taupe/30 py-5 last:border-0">
              <div className="flex-none w-12">
                <span className="font-serif text-2xl text-chocolate/20 font-light leading-none">
                  {item.years.split("–")[0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base text-chocolate leading-snug mb-1">
                  {item.degree}
                </h3>
                <p className="text-sm text-dark/50">{item.place}</p>
                <p className="text-xs text-muted mt-1">{item.years} · {item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: two-column timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-taupe/40" />
          <div className="space-y-10">
            {items.map((item, i) => (
              <div key={i} className="relative grid grid-cols-2 gap-16">
                <div className={i % 2 === 0 ? "text-right pr-8" : "col-start-2 pl-8"}>
                  <span className="font-serif text-3xl text-warm-brown font-light">
                    {item.years}
                  </span>
                </div>
                <div className={`bg-beige p-5 ${i % 2 === 0 ? "col-start-2 pl-8" : "col-start-1 row-start-1 pr-8 text-right"}`}>
                  <p className="text-sm text-dark/50 font-light mb-1">{item.place}</p>
                  <p className="font-serif text-xl text-chocolate">{item.degree}</p>
                  {item.note && (
                    <p className="text-sm text-muted italic mt-1">{item.note}</p>
                  )}
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-chocolate" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
