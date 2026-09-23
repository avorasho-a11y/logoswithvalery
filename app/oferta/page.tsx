export default function Oferta() {
  return (
    <main className="min-h-screen bg-cream py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-xs tracking-widest uppercase text-muted hover:text-chocolate transition-colors">
          ← На главную
        </a>

        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-chocolate mt-8 mb-2 leading-tight">
          Договор-оферта<br />
          <span className="italic">на оказание услуг</span>
        </h1>
        <div className="w-10 h-px bg-chocolate/40 my-6" />

        <div className="space-y-8 text-dark/70 text-sm md:text-base leading-snug">

          <div>
            <p className="section-label mb-3">1. Общие положения</p>
            <div className="space-y-3 text-dark/60">
              <p>
                1.1. Настоящий документ является публичной офертой (далее — «Договор»)
                Индивидуального предпринимателя{" "}
                <strong className="text-chocolate">Хачатуровой Валерии Владимировны</strong>{" "}
                (ОГРНИП 315774600090062, ИНН 773610884416, далее — «Исполнитель»)
                и содержит все существенные условия оказания психологических консультационных услуг.
              </p>
              <p>
                1.2. Акцептом настоящей оферты является оплата услуг Исполнителя
                или подтверждение записи на консультацию.
              </p>
              <p>
                1.3. Договор считается заключённым с момента акцепта и действует
                до полного исполнения сторонами своих обязательств.
              </p>
            </div>
          </div>

          <div>
            <p className="section-label mb-3">2. Предмет договора</p>
            <div className="space-y-3 text-dark/60">
              <p>
                2.1. Исполнитель оказывает Заказчику психологические консультационные
                услуги в формате индивидуальных сессий (далее — «Консультация»)
                в рамках логотерапии и экзистенциального анализа.
              </p>
              <p>
                2.2. Консультации проводятся дистанционно посредством видеосвязи
                (платформа Zoom).
              </p>
              <p>
                2.3. Продолжительность одной консультации: 50–60 минут.
              </p>
            </div>
          </div>

          <div>
            <p className="section-label mb-3">3. Права и обязанности сторон</p>
            <div className="space-y-3 text-dark/60">
              <p className="font-medium text-dark/70">Исполнитель обязуется:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Оказывать услуги качественно и в согласованное время</li>
                <li>Соблюдать конфиденциальность полученной информации</li>
                <li>Своевременно уведомлять об изменении времени или формата сессии</li>
              </ul>
              <p className="font-medium text-dark/70 mt-4">Заказчик обязуется:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Своевременно оплачивать услуги</li>
                <li>Уведомлять об отмене не менее чем за 24 часа до сессии</li>
                <li>Обеспечить стабильное интернет-соединение для участия в сессии</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="section-label mb-3">4. Стоимость и порядок оплаты</p>
            <div className="space-y-3 text-dark/60">
              <p>
                4.1. Стоимость одной консультации указывается Исполнителем
                индивидуально при согласовании записи.
              </p>
              <p>
                4.2. Оплата производится до начала консультации по реквизитам,
                предоставленным Исполнителем.
              </p>
              <p>
                4.3. В случае отмены консультации менее чем за 24 часа без
                уважительной причины стоимость сессии не возвращается.
              </p>
            </div>
          </div>

          <div>
            <p className="section-label mb-3">5. Конфиденциальность</p>
            <div className="space-y-3 text-dark/60">
              <p>
                5.1. Исполнитель обязуется не разглашать персональные данные
                и содержание консультаций третьим лицам без письменного согласия
                Заказчика, за исключением случаев, предусмотренных законодательством РФ.
              </p>
            </div>
          </div>

          <div>
            <p className="section-label mb-3">6. Ограничение ответственности</p>
            <div className="space-y-3 text-dark/60">
              <p>
                6.1. Психологическая консультация не является медицинской услугой
                и не заменяет психиатрическую или медицинскую помощь.
              </p>
              <p>
                6.2. Исполнитель не несёт ответственности за результат,
                зависящий от действий и решений Заказчика.
              </p>
            </div>
          </div>

          <div>
            <p className="section-label mb-3">7. Порядок разрешения споров</p>
            <div className="space-y-3 text-dark/60">
              <p>
                7.1. Все споры решаются путём переговоров. При недостижении
                соглашения — в соответствии с законодательством Российской Федерации
                по месту нахождения Исполнителя.
              </p>
            </div>
          </div>

          <div className="border-t border-taupe/30 pt-6">
            <p className="section-label mb-3">Реквизиты Исполнителя</p>
            <div className="space-y-1 text-dark/60">
              <p>ИП Хачатурова Валерия Владимировна</p>
              <p>ОГРНИП: 315774600090062</p>
              <p>ИНН: 773610884416</p>
              <p>Телефон: <a href="https://wa.me/79857607579" target="_blank" rel="noopener noreferrer" className="text-chocolate">+7 985 760-75-79</a></p>
              <p>Email: <a href="mailto:N7607579@yandex.ru" className="text-chocolate">N7607579@yandex.ru</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
