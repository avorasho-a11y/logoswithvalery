export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-cream pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-sm tracking-[0.3em] uppercase text-muted mb-6">
            Психолог · Логотерапевт
          </p>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-chocolate leading-none mb-4">
            Валерия
            <br />
            <span className="italic">Хачатурова</span>
          </h1>
          <p className="text-lg md:text-xl text-dark/70 font-light mt-6 mb-10 leading-relaxed max-w-md">
            Экзистенциальный психолог для женщин, логотерапевт
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacts"
              className="inline-block px-8 py-4 bg-chocolate text-cream text-sm tracking-widest uppercase hover:bg-dark transition-colors text-center"
            >
              Записаться на консультацию
            </a>
            <a
              href="#about"
              className="inline-block px-8 py-4 border border-chocolate/40 text-chocolate text-sm tracking-widest uppercase hover:border-chocolate transition-colors text-center"
            >
              Узнать больше
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-72 h-96 md:w-80 md:h-[480px] lg:w-96 lg:h-[560px]">
            <div className="absolute inset-0 bg-beige rounded-sm" />
            <div className="absolute inset-4 bg-taupe/20 rounded-sm flex items-end p-6">
              <p className="text-warm-brown font-serif text-lg italic">
                Фото Валерии
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-blue/40" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-warm-brown/30" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-chocolate/30" />
      </div>
    </section>
  );
}
