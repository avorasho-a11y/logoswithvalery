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
    <section id="education" className="py-20 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <p className="section-label mb-3">
            Моё образование
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-chocolate">
            Образование
          </h2>
        </div>

        {/* Mobile: stacked cards with big year */}
        <div className="md:hidden space-y-0">
          {items.map((item, i) => (
            <div key={i} className="flex gap-5 border-b border-taupe/30 py-6 last:border-0">
              <div className="flex-none">
                <span className="font-serif text-3xl text-chocolate/25 font-light leading-none">
                  {item.years.split("–")[0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-serif text-lg text-chocolate leading-tight">{item.degree}</h3>
                  {item.note && (
                    <span className="flex-none text-xs text-muted italic border border-taupe/40 px-2 py-0.5 rounded-full">
                      {item.note}
                    </span>
                  )}
                </div>
                <p className="text-sm text-dark/50 font-light">{item.place}</p>
                <p className="text-xs text-muted mt-1">{item.years}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: two-column timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-taupe/40" />
          <div className="space-y-12">
            {items.map((item, i) => (
              <div key={i} className="relative grid grid-cols-2 gap-16">
                <div className={i % 2 === 0 ? "text-right pr-8" : "col-start-2 pl-8"}>
                  <span className="font-serif text-3xl text-warm-brown font-light">
                    {item.years}
                  </span>
                </div>
                <div className={`bg-beige p-6 ${i % 2 === 0 ? "col-start-2 pl-8" : "col-start-1 row-start-1 pr-8 text-right"}`}>
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
