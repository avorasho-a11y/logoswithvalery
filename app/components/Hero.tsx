export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-cream">
      {/* Mobile: photo strip at top */}
      <div className="md:hidden relative h-[55vw] max-h-72 bg-beige overflow-hidden">
        <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-cream/60 to-transparent">
          <p className="font-serif text-warm-brown italic text-sm">Фото Валерии</p>
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 border border-blue/40" />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-16 md:py-0">
          <div className="order-2 md:order-1">
            <p className="section-label mb-5">
              Психолог · Логотерапевт
            </p>

            <h1 className="font-serif font-light text-chocolate leading-none mb-5">
              <span className="block text-6xl sm:text-7xl md:text-7xl lg:text-8xl">
                Валерия
              </span>
              <span className="block text-6xl sm:text-7xl md:text-7xl lg:text-8xl italic">
                Хачатурова
              </span>
            </h1>

            <div className="w-10 h-px bg-chocolate/30 my-6" />

            <p className="text-base md:text-lg text-dark/65 font-light leading-relaxed max-w-sm mb-6">
              Экзистенциальный психолог для женщин, логотерапевт
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contacts"
                className="px-7 py-4 bg-chocolate text-cream text-xs tracking-widest uppercase hover:bg-dark transition-colors text-center"
              >
                Записаться на консультацию
              </a>
              <a
                href="#about"
                className="px-7 py-4 border border-chocolate/40 text-chocolate text-xs tracking-widest uppercase hover:border-chocolate transition-colors text-center"
              >
                Узнать больше
              </a>
            </div>

            {/* Mobile scroll hint */}
            <div className="flex items-center gap-3 mt-10 md:hidden">
              <div className="w-8 h-px bg-chocolate/30" />
              <span className="text-xs tracking-widest uppercase text-muted">
                Листайте вниз
              </span>
            </div>
          </div>

          {/* Desktop photo */}
          <div className="order-1 md:order-2 hidden md:flex justify-end">
            <div className="relative w-80 h-[480px] lg:w-96 lg:h-[560px]">
              <div className="absolute inset-0 bg-beige" />
              <div className="absolute inset-4 bg-taupe/20 flex items-end p-6">
                <p className="text-warm-brown font-serif text-lg italic">Фото Валерии</p>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-blue/40" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-warm-brown/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
