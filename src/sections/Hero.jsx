function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://advancedagency.fr/wp-content/uploads/2025/02/44b503153063467.6329428a5efb7.webp')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/80"></div>

      {/* Content */}
      <div className="max-w-4xl relative z-10">
        <h1
          className="
          text-white font-editorial
          text-[clamp(2.8rem,6vw,6rem)]
          leading-[1.05]
          tracking-tight
          drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
        "
        >
          <span className="block mb-5 opacity-90">
            Together Towards a
          </span>

          <span className="relative inline-block float">
            <span className="digital-text text-white">
              Digital Morocco
            </span>
          </span>
        </h1>
      </div>

      {/* Scroll Down */}
      <div className="scroll-indicator relative z-10">
        <span>Scroll</span>
        <div className="down-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
