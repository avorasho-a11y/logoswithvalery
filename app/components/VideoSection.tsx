export default function VideoSection() {
  return (
    <section className="py-12 md:py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-label text-cream/70 mb-4">
          Видео-визитка
        </p>
        <h2 className="font-serif text-5xl md:text-6xl font-light text-cream mb-12">
          Познакомимся
          <br />
          <span className="italic text-cream/60">поближе</span>
        </h2>

        <div className="relative aspect-video bg-chocolate/40 flex items-center justify-center">
          <div className="absolute inset-0 border border-cream/10" />
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border border-cream/30 flex items-center justify-center mx-auto mb-4 hover:border-cream/60 transition-colors cursor-pointer">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-cream/60 ml-1" />
            </div>
            <p className="text-cream/40 text-sm tracking-widest uppercase">
              Видео будет добавлено
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
