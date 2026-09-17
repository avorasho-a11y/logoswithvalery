export default function Privacy() {
  return (
    <main className="min-h-screen bg-cream py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-xs tracking-widest uppercase text-muted hover:text-chocolate transition-colors">
          ← На главную
        </a>

        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-chocolate mt-8 mb-2 leading-tight">
          Согласие на обработку<br />
          <span className="italic">персональных данных</span>
        </h1>
        <div className="w-10 h-px bg-chocolate/40 my-6" />

        <div className="space-y-6 text-dark/70 text-sm md:text-base leading-snug">
          <p>
            Настоящим я, субъект персональных данных, даю своё согласие на обработку
            моих персональных данных Индивидуальному предпринимателю{" "}
            <strong className="text-chocolate">Хачатуровой Валерии Владимировне</strong>{" "}
            (ОГРНИП 315774600090062, ИНН 773610884416).
          </p>

          <div>
            <p className="section-label mb-3">Перечень персональных данных</p>
            <ul className="list-disc list-inside space-y-1 text-dark/60">
              <li>Имя и фамилия</li>
              <li>Адрес электронной почты</li>
              <li>Номер телефона</li>
              <li>Иные сведения, добровольно сообщённые при обращении</li>
            </ul>
          </div>

          <div>
            <p className="section-label mb-3">Цели обработки</p>
            <ul className="list-disc list-inside space-y-1 text-dark/60">
              <li>Запись на психологическую консультацию</li>
              <li>Обратная связь и ответы на запросы</li>
              <li>Информирование об услугах (при наличии согласия)</li>
            </ul>
          </div>

          <div>
            <p className="section-label mb-3">Способы обработки</p>
            <p className="text-dark/60">
              Сбор, запись, систематизация, хранение, использование.
              Обработка осуществляется с использованием средств автоматизации.
              Персональные данные не передаются третьим лицам без отдельного согласия,
              за исключением случаев, предусмотренных законодательством РФ.
            </p>
          </div>

          <div>
            <p className="section-label mb-3">Срок хранения</p>
            <p className="text-dark/60">
              Персональные данные хранятся до достижения целей обработки или
              до отзыва согласия субъектом персональных данных.
            </p>
          </div>

          <div>
            <p className="section-label mb-3">Отзыв согласия</p>
            <p className="text-dark/60">
              Вы вправе в любой момент отозвать данное согласие, направив
              письменное уведомление на электронный адрес{" "}
              <a href="mailto:N7607579@yandex.ru" className="text-chocolate underline">
                N7607579@yandex.ru
              </a>.
            </p>
          </div>

          <div className="border-t border-taupe/30 pt-6">
            <p className="section-label mb-3">Оператор персональных данных</p>
            <div className="space-y-1 text-dark/60">
              <p>ИП Хачатурова Валерия Владимировна</p>
              <p>ОГРНИП: 315774600090062</p>
              <p>ИНН: 773610884416</p>
              <p>Телефон: <a href="tel:+79857607579" className="text-chocolate">+7 985 760-75-79</a></p>
              <p>Email: <a href="mailto:N7607579@yandex.ru" className="text-chocolate">N7607579@yandex.ru</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
