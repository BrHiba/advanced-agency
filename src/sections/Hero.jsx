function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center px-6 text-center relative">
      <div className="max-w-4xl relative z-10">
        <h1
          className=" text-white font-editorial
          text-[clamp(2.8rem,6vw,5.5rem)]
          leading-[1.05]
          tracking-tight"
        >
          <span className="block mb-5">Together Towards a</span>

          <span className="relative inline-block float">
            <span className="digital-text">Digital Morocco</span>
          </span>
        </h1>
      </div>

      {/* Scroll Down */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="down-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
