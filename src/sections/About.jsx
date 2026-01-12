import LogoScene from "../components/LogoScene";

function About() {
  return (
    <section
  id="about"
  className="relative py-32 px-6 about-bg overflow-hidden"
>



      {/* Background glow */}

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* Text */}
        <div>
          <span className="text-sm tracking-widest text-[#C4EF17]">
            ABOUT US
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Building Digital
            <br />
            Experiences for Tomorrow
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            We are a digital agency focused on creating modern web,
            mobile, and AI solutions that blend creativity,
            performance, and innovation.
          </p>
        </div>

        {/* 3D */}
        <div className="h-80 md:h-105">
          <LogoScene />
        </div>

      </div>
    </section>
  );
}

export default About;
