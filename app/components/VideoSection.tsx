export default function VideoSection() {
  return (
    <section className="py-10 md:py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-label text-cream/70 mb-2">Видео-визитка</p>
        <h2 className="font-serif text-4xl md:text-6xl font-semibold text-cream mb-6 md:mb-10">
          Познакомимся
          <br />
          <span className="italic text-cream/60">поближе</span>
        </h2>

        <div className="relative aspect-video bg-chocolate/40 flex items-center justify-center">
          <div className="absolute inset-0 border border-cream/10" />
          <div className="text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-cream/30 flex items-center justify-center mx-auto mb-3 hover:border-cream/60 transition-colors cursor-pointer">
              <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-cream/60 ml-1" />
            </div>
            <p className="section-label text-cream/50">Видео будет добавлено</p>
          </div>
        </div>
      </div>
    </section>
  );
}
