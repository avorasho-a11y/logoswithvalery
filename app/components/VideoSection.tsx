export default function VideoSection() {
  return (
    <section className="py-10 md:py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="section-label text-cream/70 mb-2">Видео-визитка</p>
        <h2 className="font-serif text-4xl md:text-6xl font-semibold text-cream mb-6 md:mb-10">
          Познакомимся
          <br />
          поближе
        </h2>

        <div className="flex justify-center">
          <video
            src="/video-card.mp4"
            controls
            playsInline
            className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-2xl"
            style={{ aspectRatio: "532/640" }}
          />
        </div>
      </div>
    </section>
  );
}
