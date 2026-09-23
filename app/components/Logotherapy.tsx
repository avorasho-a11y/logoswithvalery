export default function Logotherapy() {
  return (
    <section id="logotherapy" className="py-12 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 md:gap-16 items-start">

        {/* Left: heading + quote + pillars */}
        <div>
          <p className="section-label mb-2">Мой подход</p>
          <h2 className="font-serif text-4xl md:text-6xl font-semibold text-chocolate leading-tight mb-4 md:mb-6">
            Что такое
            <br />
            логотерапия?
          </h2>
          <div className="w-10 h-px bg-chocolate/40 mb-5 md:mb-7" />

          <div className="bg-beige p-5 md:p-8 relative">
            <p className="font-serif text-3xl text-chocolate/20 leading-none absolute top-3 left-5">"</p>
            <p className="font-serif text-lg md:text-xl italic text-chocolate/80 leading-snug pt-3">
              У кого есть <strong>«зачем»</strong> жить, тот выдержит почти любое <strong>«как»</strong>
            </p>
            <p className="text-sm text-muted mt-3">— Фридрих Ницше</p>
          </div>

          {/* Frankl portrait — mobile only */}
          <div className="md:hidden mt-5 text-center">
            <img
              src="/frankl.jpg"
              alt="Виктор Франкл"
              className="w-32 mx-auto object-cover grayscale rounded-2xl"
            />
            <p className="text-xs text-muted mt-2 text-center w-full">Виктор Франкл</p>
          </div>

          <div className="mt-5 flex gap-6 md:gap-8">
            {["Свобода воли", "Воля к смыслу", "Смысл жизни"].map((pillar) => (
              <div key={pillar} className="text-center">
                <div className="w-px h-6 bg-chocolate/30 mx-auto mb-2" />
                <p className="section-label">{pillar}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: body text */}
        <div className="space-y-4 text-dark/70 font-normal leading-snug text-sm md:text-base mt-8 md:mt-0">
          <p>
            Логотерапия — это направление психотерапии, которое создал
            Виктор Франкл. Она держится на трёх столпах: свобода воли,
            воля к смыслу, смысл жизни.
          </p>
          <p>
            Франкл своим жизненным опытом доказал: человек может вынести
            почти любое «как», если у него есть достаточно сильное «зачем».
          </p>
          <p>
            В логотерапии мы не копаемся в детских травмах. Мы ищем то,
            что наполняет вашу жизнь здесь и сейчас. Мы опираемся на
            ваши ценности, чувство ответственности, выборы и ту свободу,
            которая у вас всегда есть — даже когда кажется, что её нет.
          </p>

          <div className="border-t border-taupe/40 pt-4">
            <p className="section-label mb-2">Важно знать</p>
            <p className="font-serif text-lg text-chocolate italic">
              Это не глубинная, а вершинная психология.
            </p>
            <p className="mt-2 text-sm">
              Мы смотрим не вниз — в прошлое, а вперёд — к смыслу и возможностям.
            </p>
          </div>

          {/* Portrait — desktop only */}
          <div className="hidden md:block text-center">
            <img
              src="/frankl.jpg"
              alt="Виктор Франкл"
              className="w-full max-w-[220px] mx-auto object-cover grayscale rounded-2xl"
            />
            <p className="text-xs text-muted mt-2 text-center">Виктор Франкл</p>
          </div>
        </div>
      </div>
    </section>
  );
}
