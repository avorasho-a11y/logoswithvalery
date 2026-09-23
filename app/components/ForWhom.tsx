export default function ForWhom() {
  return (
    <section className="bg-chocolate text-cream overflow-hidden">

      {/* Mobile photo banner */}
      <div className="md:hidden h-52 overflow-hidden relative">
        <img
          src="/contacts-photo.jpg"
          alt="Валерия Хачатурова"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 to-transparent" />
      </div>

      <div className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 md:gap-10 items-start">

          {/* Left: heading + text */}
          <div>
            <p className="section-label text-cream/80 mb-4">
              Кому я буду полезна
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight mb-8">
              Я работаю
              <br />
              только с женщинами
            </h2>
            <div className="w-12 h-px bg-cream/30 mb-8" />
            <p className="text-cream/70 font-normal leading-snug">
              Это осознанный выбор. Женский опыт — особенный. Кризисы,
              роли, ожидания, переходы — всё это имеет свою специфику.
              Я сама женщина, и это пространство создано специально для вас.
            </p>
          </div>

          {/* Center: list */}
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
                <p className="text-cream/80 font-normal leading-snug">{item}</p>
              </div>
            ))}
          </div>

          {/* Right: photo — desktop only */}
          <div className="hidden md:block self-center overflow-hidden rounded-2xl">
            <img
              src="/contacts-photo.jpg"
              alt="Валерия Хачатурова"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
