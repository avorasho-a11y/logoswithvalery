export default function Contacts() {
  return (
    <section id="contacts" className="py-12 md:py-24 bg-beige">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-label mb-4">
          Контакты
        </p>
        <h2 className="font-serif text-5xl md:text-6xl font-semibold text-chocolate mb-6 leading-tight">
          Готовы сделать
          <br />
          первый шаг?
        </h2>
        <p className="text-dark/60 font-light max-w-md mx-auto mb-8 leading-relaxed">
          Первая консультация — это знакомство. Мы поговорим о вашем
          запросе, и вы поймёте, хотите ли продолжить работу.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 md:mb-14">
          <a
            href="https://t.me/valery1503"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-chocolate text-cream text-xs tracking-widest uppercase hover:bg-dark transition-colors text-center"
          >
            Telegram
          </a>
          <a
            href="https://wa.me/79857607579"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-chocolate/40 text-chocolate text-xs tracking-widest uppercase hover:border-chocolate transition-colors text-center"
          >
            WhatsApp
          </a>
        </div>

        <div className="border-t border-taupe/40 pt-8 grid sm:grid-cols-3 gap-6 text-left">
          <div>
            <p className="section-label mb-2">Формат</p>
            <p className="font-serif text-lg text-chocolate">Онлайн</p>
            <p className="text-sm text-dark/50 font-light mt-1">Zoom</p>
          </div>
          <div>
            <p className="section-label mb-2">Длительность</p>
            <p className="font-serif text-lg text-chocolate">50–60 минут</p>
            <p className="text-sm text-dark/50 font-light mt-1">Одна сессия</p>
          </div>
          <div>
            <p className="section-label mb-2">Написать</p>
            <div className="space-y-1">
              <a href="https://t.me/valery1503" target="_blank" rel="noopener noreferrer" className="block font-serif text-lg text-chocolate hover:text-warm-brown transition-colors">
                @valery1503
              </a>
              <a href="https://wa.me/79857607579" target="_blank" rel="noopener noreferrer" className="block text-sm text-dark/50 font-light hover:text-chocolate transition-colors">
                +7 985 760-75-79
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-taupe/30 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-serif text-xl text-chocolate">Валерия Хачатурова</p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <a href="/privacy" className="text-xs text-muted hover:text-chocolate transition-colors">
            Персональные данные
          </a>
          <a href="/oferta" className="text-xs text-muted hover:text-chocolate transition-colors">
            Договор-оферта
          </a>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} · Экзистенциальный психолог
          </p>
        </div>
      </div>
    </section>
  );
}
