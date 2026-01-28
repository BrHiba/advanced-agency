import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
      <div className="max-w-5xl relative z-10">
        <h1
          className="
            text-white font-editorial
            text-[clamp(2.4rem,5vw,5.8rem)]
            sm:text-[clamp(2.8rem,5.5vw,6rem)]
            leading-[1.05]
            tracking-tight
            drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]
          "
        >
          <span className="block mb-4 sm:mb-5 opacity-90 text-[0.85em] sm:text-[1em]">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <FontAwesomeIcon
          icon={faAngleDown}
          className="text-3xl sm:text-4xl text-[#C4EF17] down-arrow"
        />
      </div>
    </section>
  );
}

export default Hero;
