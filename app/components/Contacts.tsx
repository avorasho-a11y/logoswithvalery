export default function Contacts() {
  return (
    <section id="contacts" className="py-24 md:py-32 bg-beige">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-label mb-4">
          Контакты
        </p>
        <h2 className="font-serif text-5xl md:text-6xl font-light text-chocolate mb-6 leading-tight">
          Готовы сделать
          <br />
          <span className="italic">первый шаг?</span>
        </h2>
        <p className="text-dark/60 font-light max-w-md mx-auto mb-12 leading-loose">
          Первая консультация — это знакомство. Мы поговорим о вашем
          запросе, и вы поймёте, хотите ли продолжить работу.
        </p>

        <a
          href="https://t.me/"
          className="inline-block px-12 py-5 bg-chocolate text-cream text-sm tracking-widest uppercase hover:bg-dark transition-colors mb-16"
        >
          Записаться на консультацию
        </a>

        <div className="border-t border-taupe/40 pt-12 grid sm:grid-cols-3 gap-8 text-left">
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

      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-taupe/30 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-serif text-xl text-chocolate">Валерия Хачатурова</p>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} · Экзистенциальный психолог
        </p>
      </div>
    </section>
  );
}
