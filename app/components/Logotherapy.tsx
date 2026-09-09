export default function Logotherapy() {
  return (
    <section id="logotherapy" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-4">
            Мой подход
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-chocolate leading-tight mb-8">
            Что такое
            <br />
            <span className="italic">логотерапия?</span>
          </h2>
          <div className="w-12 h-px bg-chocolate/40 mb-8" />

          <div className="bg-beige p-8 relative">
            <p className="font-serif text-4xl text-chocolate/20 leading-none absolute top-4 left-6">
              "
            </p>
            <p className="font-serif text-xl italic text-chocolate/80 leading-relaxed pt-4">
              Человек может вынести почти любое «как», если у него есть
              достаточно сильное «зачем».
            </p>
            <p className="text-sm text-muted mt-4">— Виктор Франкл</p>
          </div>

          <div className="mt-8 flex gap-8">
            {["Свобода воли", "Воля к смыслу", "Смысл жизни"].map((pillar) => (
              <div key={pillar} className="text-center">
                <div className="w-px h-8 bg-chocolate/30 mx-auto mb-3" />
                <p className="text-xs tracking-widest uppercase text-muted">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-dark/70 font-light leading-loose">
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

          <div className="border-t border-taupe/40 pt-6 mt-6">
            <p className="text-sm tracking-[0.2em] uppercase text-muted mb-2">
              Важно знать
            </p>
            <p className="font-serif text-xl text-chocolate italic">
              Это не глубинная, а вершинная психология.
            </p>
            <p className="mt-3 text-sm">
              Мы смотрим не вниз — в прошлое, а вперёд — к смыслу и
              возможностям.
            </p>
          </div>

          <div className="bg-beige p-6 mt-4">
            <div className="w-32 h-40 bg-taupe/20 mx-auto flex items-end p-3">
              <p className="text-xs text-muted text-center w-full">
                Портрет В. Франкла
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
