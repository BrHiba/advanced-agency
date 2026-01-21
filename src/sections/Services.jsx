// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    image: "/advanced-web2.png",
  },
  {
    title: "Mobile Applications",
    image: "",
  },
  {
    title: "Agentic AI",
    image: "",
  },
  {
    title: "E-commerce Development",
    image: "",
  },
];

function Services() {
  return (
    <section className="w-full h-screen bg-black overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 w-full h-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative w-full h-full overflow-hidden flex items-end justify-center"
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
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black"
              variants={{
                rest: { opacity: 0.2 },
                hover: { opacity: 0.2 },
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Content */}
            <div className="relative z-10 mb-16 flex flex-col items-center text-center">
              <motion.h3
                className="text-white text-3xl md:text-4xl font-editorial tracking-wide"
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
                  rest: { width: 40, opacity: 0.5 },
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
