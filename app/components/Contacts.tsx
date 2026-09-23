export default function Contacts() {
  return (
    <section id="contacts" className="py-12 md:py-24 bg-beige">
      <div className="max-w-5xl mx-auto px-6">
        {/* Text + Photo */}
        <div className="grid md:grid-cols-2 md:gap-16 md:items-center mb-8 md:mb-14">
          <div className="text-center md:text-left">
            <p className="section-label mb-4">Контакты</p>
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-chocolate mb-6 leading-none">
              Готовы сделать
              <br />
              первый шаг?
            </h2>
            <p className="text-dark/60 font-light max-w-md mx-auto md:mx-0 mb-8 leading-snug">
              Первая консультация — это знакомство. Мы поговорим о вашем
              запросе, и вы поймёте, хотите ли продолжить работу.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8 md:mb-0">
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
          </div>

          {/* Photo - mobile: below buttons, desktop: right column */}
          <div className="md:hidden mt-8 rounded-2xl overflow-hidden">
            <img
              src="/contacts-photo.jpg"
              alt="Валерия Хачатурова"
              className="w-full h-auto block"
            />
          </div>
          <div className="hidden md:block overflow-hidden rounded-2xl">
            <img
              src="/contacts-photo.jpg"
              alt="Валерия Хачатурова"
              className="w-full"
            />
          </div>
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
              <a href="https://t.me/valery1503" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-serif text-lg text-chocolate hover:text-warm-brown transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
                @valery1503
              </a>
              <a href="https://wa.me/79857607579" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-dark/50 font-light hover:text-chocolate transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.93 13.44c-.2.56-1.18 1.08-1.63 1.15-.42.06-.95.09-1.53-.1-.35-.11-.8-.27-1.37-.52-2.42-1.05-4-3.52-4.12-3.68-.12-.16-.99-1.32-.99-2.52s.63-1.79.85-2.03c.22-.24.48-.3.64-.3h.46c.15 0 .35-.06.55.42l.7 1.7c.06.14.1.3.02.48l-.26.5-.38.44c-.12.13-.25.27-.11.53.14.26.63 1.04 1.35 1.68.93.83 1.71 1.09 1.97 1.21.26.12.41.1.56-.06l.8-.94c.19-.25.38-.2.63-.12l1.96.92c.23.11.38.16.43.25.06.35-.08 1.37-.28 1.93z"/></svg>
                +7 985 760-75-79
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-taupe/30 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <p className="font-serif text-xl text-chocolate">Валерия Хачатурова</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
            <a href="/privacy" className="text-xs text-muted hover:text-chocolate transition-colors">
              Персональные данные
            </a>
            <a href="/oferta" className="text-xs text-muted hover:text-chocolate transition-colors">
              Договор-оферта
            </a>
            <p className="text-xs text-muted">© {new Date().getFullYear()}</p>
          </div>
        </div>
        <p className="text-xs text-muted leading-snug">
          ИП Хачатурова Валерия Владимировна · ОГРНИП 315774600090062 · ИНН 773610884416
        </p>
      </div>
    </section>
  );
}
