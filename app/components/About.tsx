export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6">

        {/* Mobile header */}
        <div className="md:hidden mb-8">
          <p className="section-label mb-3">Обо мне</p>
          <h2 className="font-serif text-5xl font-light text-chocolate leading-tight">
            Я психолог-<br />
            <span className="italic">консультант</span>
          </h2>
          <div className="w-10 h-px bg-chocolate/30 mt-6" />
        </div>

        {/* Pull quote — mobile only */}
        <div className="md:hidden bg-chocolate text-cream px-6 py-8 mb-8 -mx-6">
          <p className="font-serif text-2xl italic leading-snug">
            Моя специализация — логотерапия.
            <br />
            Она не про дефекты речи.
            <br />
            Она про смысл.
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-16 md:items-start">
          {/* Desktop left column */}
          <div className="hidden md:block">
            <p className="section-label mb-4">Обо мне</p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-chocolate leading-tight mb-8">
              Я психолог-<br />
              <span className="italic">консультант</span>
            </h2>
            <div className="w-12 h-px bg-chocolate/40 mb-8" />
            <p className="text-2xl md:text-3xl font-serif font-light text-chocolate/80 leading-relaxed mb-8 italic">
              Моя специализация — логотерапия.
              <br />
              Она не про дефекты речи.
              <br />
              Она про смысл.
            </p>
          </div>

          {/* Text content */}
          <div className="space-y-5 text-dark/70 leading-loose font-light text-sm md:text-base">
            <p>
              Мой главный учитель — Виктор Франкл. Тот самый, который выжил
              в концлагере и доказал: даже когда у нас отнимают всё, у нас
              остаётся свобода выбирать своё отношение к происходящему.
            </p>
            <p>
              На наших встречах мы не будем копаться в прошлом. Мы будем
              опираться на то, что важно здесь и сейчас — чтобы строить
              будущее, которое будет только вашим.
            </p>

            <div className="bg-cream p-5 border-l-2 border-chocolate/30 space-y-3">
              <p className="section-label mb-3">
                Я помогу вам найти:
              </p>
              <ul className="space-y-2 text-dark/75">
                {[
                  "то, ради чего стоит просыпаться утром",
                  "то, что вы можете дать этому миру",
                  "смысл даже в том, что кажется бессмысленным",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base">
                    <span className="text-chocolate shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-serif text-xl italic text-chocolate/80 pt-2">
              У меня нет готовых ответов.
              <br />
              Но есть ключ.
              <br />
              А дверь мы откроем вместе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
