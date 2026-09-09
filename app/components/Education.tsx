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
    degree: "Бакалавр психологии",
    note: "Профиль «Психологическое консультирование и психотерапия качества жизни»",
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
    <section id="education" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-4">
            Моё образование
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-chocolate">
            Образование
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-taupe/40 hidden md:block" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <div
                key={i}
                className={`relative md:grid md:grid-cols-2 md:gap-16 ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex flex-col justify-center ${
                    i % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <span className="font-serif text-3xl text-warm-brown font-light mb-2">
                    {item.years}
                  </span>
                </div>

                <div
                  className={`bg-beige p-6 mt-4 md:mt-0 ${
                    i % 2 === 0 ? "md:col-start-2 md:pl-16" : "md:col-start-1 md:row-start-1 md:pr-16 md:text-right"
                  }`}
                >
                  <p className="font-light text-dark/60 text-sm mb-2">
                    {item.place}
                  </p>
                  <p className="font-serif text-xl text-chocolate mb-1">
                    {item.degree}
                  </p>
                  {item.note && (
                    <p className="text-sm text-muted italic">{item.note}</p>
                  )}
                </div>

                <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-chocolate hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
