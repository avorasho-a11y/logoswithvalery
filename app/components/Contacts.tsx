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
          <span className="italic">первый шаг?</span>
        </h2>
        <p className="text-dark/60 font-light max-w-md mx-auto mb-8 leading-relaxed">
          Первая консультация — это знакомство. Мы поговорим о вашем
          запросе, и вы поймёте, хотите ли продолжить работу.
        </p>

        <a
          href="https://t.me/"
          className="inline-block px-12 py-5 bg-chocolate text-cream text-sm tracking-widest uppercase hover:bg-dark transition-colors mb-8 md:mb-14"
        >
          Записаться на консультацию
        </a>

        <div className="border-t border-taupe/40 pt-8 grid sm:grid-cols-3 gap-6 text-left">
          <div>
            <p className="section-label mb-2">
              Формат
            </p>
            <p className="font-serif text-lg text-chocolate">Онлайн</p>
            <p className="text-sm text-dark/50 font-light mt-1">
              Zoom / Google Meet
            </p>
          </div>
          <div>
            <p className="section-label mb-2">
              Длительность
            </p>
            <p className="font-serif text-lg text-chocolate">50–60 минут</p>
            <p className="text-sm text-dark/50 font-light mt-1">
              Одна сессия
            </p>
          </div>
          <div>
            <p className="section-label mb-2">
              Написать
            </p>
            <p className="font-serif text-lg text-chocolate">Telegram</p>
            <p className="text-sm text-dark/50 font-light mt-1">
              @logoswithvalery
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-taupe/30 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-serif text-xl text-chocolate">Валерия Хачатурова</p>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} · Экзистенциальный психолог
        </p>
      </div>
    </section>
  );
}
