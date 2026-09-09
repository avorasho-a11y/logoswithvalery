const categories = [
  {
    title: "Потеря смысла и внутренняя пустота",
    hooks: ["Жизнь есть, а смысла в ней нет", "Непонятно, ради чего просыпаться"],
  },
  {
    title: "Экзистенциальные проблемы",
    hooks: ["Вопросы: «Кто я?», «Зачем?», «Что дальше?»", "Ощущение, что жизнь проходит мимо"],
  },
  {
    title: "Жизненные кризисы",
    hooks: ["Возрастной рубеж — и внутри всё переворачивается", "Жажда перемен, но шаг вперёд пугает"],
  },
  {
    title: "Тревога, страхи, напряжение",
    hooks: ["Постоянное внутреннее беспокойство", "Мысли, которые не дают уснуть"],
  },
  {
    title: "Депрессивные состояния, апатия",
    hooks: ["Всё кажется серым и безжизненным", "Потеря интереса к тому, что раньше радовало"],
  },
  {
    title: "Горе, утрата, травма",
    hooks: ["Развод, расставание, потеря близкого", "Жизнь «до» и «после»"],
  },
  {
    title: "Неуверенность и низкая самооценка",
    hooks: ["Сомнения в себе и своих решениях", "Ощущение, что «я недостаточно хороша»"],
  },
  {
    title: "Выгорание",
    hooks: ["Усталость, которую не снимает отдых", "Всё через «надо», а не через «хочу»"],
  },
  {
    title: "Самоопределение и поиск себя",
    hooks: ["Хочется понять свои истинные желания", "Страх ошибиться в выборе"],
  },
];

export default function WorksWith() {
  return (
    <section id="works-with" className="py-24 md:py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-4">
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-4">
            С чем я работаю
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-chocolate mb-4">
            Узнаёте себя?
          </h2>
          <p className="text-dark/60 font-light max-w-xl">
            Если хоть один из этих пунктов откликается — мы можем работать вместе.
          </p>
        </div>

        <div className="w-12 h-px bg-chocolate/40 my-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-cream p-6 hover:bg-white transition-colors group"
            >
              <div className="w-6 h-px bg-warm-brown/50 mb-4 group-hover:w-10 transition-all duration-300" />
              <h3 className="font-serif text-xl text-chocolate mb-4 leading-tight">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.hooks.map((hook, j) => (
                  <li key={j} className="flex gap-2 text-sm text-dark/60 font-light leading-snug">
                    <span className="text-warm-brown shrink-0 mt-0.5">·</span>
                    {hook}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
