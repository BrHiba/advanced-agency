// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const services = [
  {
    title: "Mobile Applications",
    image: "/advanced-mobile.png",
  },
  {
    title: "Web Development",
    image: "/advanced-web.png",
  },
  {
    title: "E-commerce Development",
    image: "/advanced-ecommerce.png",
  },
  {
    title: "Agentic AI",
    image: "/advanced-ai.png",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-black overflow-hidden"
    >
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-4
          w-full min-h-screen
        "
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="
              group relative w-full min-h-[60vh] lg:min-h-screen
              overflow-hidden flex items-end justify-center
            "
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Image */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Overlay (mobile visible / desktop hover) */}
            <motion.div
              className="absolute inset-0 bg-black/50 lg:bg-black"
              variants={{
                rest: { opacity: 0.4 },
                hover: { opacity: 0.2 },
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Content */}
            <div className="relative z-10 mb-12 lg:mb-16 flex flex-col items-center text-center px-6">
              <motion.h3
                className="
                  text-white font-editorial tracking-wide
                  text-2xl sm:text-3xl md:text-3xl lg:text-4xl
                "
                variants={{
                  rest: { y: 0, opacity: 1 },
                  hover: { y: -10, opacity: 1 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {service.title}
              </motion.h3>

              <motion.span
                className="mt-4 h-0.5 bg-white"
                variants={{
                  rest: { width: 40, opacity: 0.6 },
                  hover: { width: 90, opacity: 1 },
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
