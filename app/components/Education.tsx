const items = [
  {
    years: "2024–2026",
    place: "Высшая школа логотерапии Московского института психоанализа",
    degree: "Специализация «Логотерапия и экзистенциальный анализ»",
    note: "в процессе обучения",
  },
  {
    years: "2022–2026",
    place: "Московский институт психоанализа",
    degree: "Бакалавр психологии, профиль «Психологическое консультирование и психотерапия качества жизни»",
    note: "диплом с отличием",
  },
  {
    years: "2023–2024",
    place: "Курс «Психоанализ, теория в практической деятельности психолога»",
    degree: "Диплом о повышении квалификации",
    note: "",
  },
  {
    years: "2004–2009",
    place: "Московская государственная юридическая академия",
    degree: "Специалист, квалификация «Юрист»",
    note: "",
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

        <div className="space-y-6 md:space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-3 border-b border-taupe/30 pb-6 last:border-0 last:pb-0">
              <span className="text-warm-brown font-semibold mt-0.5 shrink-0">·</span>
              <div className="min-w-0">
                <p className="text-sm md:text-base font-semibold text-dark leading-snug">
                  {item.years} — {item.place}
                </p>
                <p className="text-sm md:text-base text-dark/65 mt-1 leading-snug">
                  {item.degree}
                  {item.note && (
                    <span className="text-muted"> ({item.note})</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
