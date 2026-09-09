export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-4">
            Обо мне
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-chocolate leading-tight mb-8">
            Я психолог-
            <br />
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

        <div className="space-y-6 text-dark/75 leading-loose font-light">
          <p>
            Мой главный учитель — Виктор Франкл. Тот самый, который выжил
            в концлагере и доказал: даже когда у нас отнимают всё, у нас
            остаётся свобода выбирать своё отношение к происходящему.
          </p>
          <p>
            На наших встречах мы не будем копаться в прошлом. Мы будем
            опираться на то, что важно здесь и сейчас. Чтобы строить
            будущее, которое будет только вашим.
          </p>

          <div className="bg-cream/60 p-6 border-l-2 border-chocolate/30 space-y-3">
            <p className="text-sm tracking-widest uppercase text-muted mb-4">
              Я помогу вам найти:
            </p>
            <ul className="space-y-2 text-dark/80">
              <li className="flex gap-3">
                <span className="text-chocolate mt-1">·</span>
                то, ради чего стоит просыпаться утром
              </li>
              <li className="flex gap-3">
                <span className="text-chocolate mt-1">·</span>
                то, что вы можете дать этому миру
              </li>
              <li className="flex gap-3">
                <span className="text-chocolate mt-1">·</span>
                смысл даже в том, что кажется бессмысленным
              </li>
            </ul>
          </div>

          <p className="font-serif text-xl italic text-chocolate/80 pt-4">
            У меня нет готовых ответов.
            <br />
            Но есть ключ.
            <br />
            А дверь мы откроем вместе.
          </p>
        </div>
      </div>
    </section>
  );
}
