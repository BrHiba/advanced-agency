import { useEffect, useState } from "react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites built to be fast, secure, and visually impactful.",
    image: "/web.png",
    type: "icon",
  },
  {
    title: "Mobile Applications ",
    desc: "Smooth and intuitive mobile apps crafted for real-world user experiences.",
    image: "/mobile.png",
    type: "icon",
  },
  {
    title: "E-commerce Development",
    desc: "Scalable online stores designed to convert visitors into loyal customers.",
    image: "/eco.png",
    type: "icon",
  },
  {
    title: "Agentic AI",
    desc: "Smart AI agents that think, act, and automate to accelerate your business.",
    image: "/ai.jpg",
    type: "bg",
  },
];


function Services() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("services");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);

      const index = Math.floor(progress * services.length);
      setActive(Math.min(index, services.length - 1));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isAI = services[active].type === "bg";

  return (
    <section id="services" className="relative h-[400vh] font-(--font-body)">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 transition-all duration-700">
        {!isAI && <div className="absolute inset-0 bg-(--color-dark)" />}

        {isAI && (
          <>
            <img
              src={services[active].image}
              className="absolute inset-0 w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/90" />
          </>
        )}
      </div>

      {/* STICKY CONTENT */}
      <div className="sticky top-0 h-screen flex items-start relative z-10 pt-32">
        <div className="w-full text-white px-9 md:px-18">
          {/* COUNTER */}
          <div className="mb-12 text-sm tracking-widest text-(--color-default)">
            0{active + 1} / 04
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-40 max-w-350">
            {/* LEFT – TEXT */}
            <div
              key={active}
              className="animate-fadeUp flex flex-col md:gap-45 items-start text-left"
            >
              <h2
                className="
                  text-[5rem] md:text-[6rem]
                  leading-[0.95]
                  font-editorial
                  tracking-tight
                  
                "
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {services[active].title}
              </h2>

              <p
                className="
                  text-sm md:text-base
                  leading-loose
                  opacity-80
                  max-w-sm
                "
              >
                

                {services[active].desc}
              </p>
            </div>

            {/* RIGHT – IMAGE */}
            {!isAI && (
              <div className="relative flex justify-end items-center pr-16">
                <div
                  className="
                    absolute w-130 h-130 rounded-full
                    bg-(--color-primary)/20 blur-[120px]
                  "
                />
                <img
                  src={services[active].image}
                  alt=""
                  className="
                    relative
                    w-105 h-105
                    md:w-115 md:h-115
                    object-contain
                    drop-shadow-[0_0_120px_rgba(196,239,23,0.55)]
                    animate-float
                  "
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
