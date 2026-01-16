// AboutPage.jsx
import LogoScene from "../components/LogoScene";

function About() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Hero / Cover */}
      <section
        className="relative w-full h-[50vh] md:h-[30vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://advancedagency.fr/wp-content/uploads/2025/02/44b503153063467.6329428a5efb7.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center z-10">
          About Us
        </h1>
      </section>

      {/* Main Content */}
      <section className="relative py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Digital <br /> Experiences for Tomorrow
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We are a digital agency focused on creating modern web,
            mobile, and AI solutions that blend creativity, performance,
            and innovation. Our team works collaboratively to deliver
            solutions that push boundaries and drive growth.
          </p>
        </div>

        {/* 3D / Animation */}
        <div className="h-80 md:h-105">
          <LogoScene />
        </div>
      </section>

    </main>
  );
}

export default About;
