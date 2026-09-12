export default function ForWhom() {
  return (
    <section className="py-12 md:py-24 bg-chocolate text-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-label text-cream/80 mb-4">
            Кому я буду полезна
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Я работаю
            <br />
            <span className="italic">только с женщинами</span>
          </h2>
          <div className="w-12 h-px bg-cream/30 mb-8" />
          <p className="text-cream/70 font-normal leading-relaxed">
            Это осознанный выбор. Женский опыт — особенный. Кризисы,
            роли, ожидания, переходы — всё это имеет свою специфику.
            Я сама женщина, и это пространство создано специально для вас.
          </p>
        </div>

        <div className="space-y-6">
          <p className="section-label text-cream/80 mb-6">
            Моя аудитория
          </p>
          {[
            "Женщины, которые чувствуют, что живут «не своей» жизнью",
            "Те, кто переживает возрастной или жизненный кризис",
            "Те, кто ищет смысл после потери, развода или перемен",
            "Те, кто устал и хочет снова чувствовать себя живой",
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="font-serif text-3xl text-cream/30 leading-none mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-cream/80 font-normal leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
