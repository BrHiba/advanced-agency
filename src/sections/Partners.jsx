// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const partners = Array.from({ length: 8 });

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.8, filter: "blur(12px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: Math.floor(i / 4) * 0.5,
    },
  }),
};

export default function PartnersHugeStyle() {
  return (
    <section className="relative bg-black py-40 px-12 overflow-hidden">
      {/* Big Title */}
 <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="
    text-6xl md:text-[8rem] font-heading leading-[1.05]
    bg-linear-to-b from-white to-white/70
    bg-clip-text text-transparent max-w-xl md:ml-10
  "
>
  Our Partners
</motion.h1>



      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 text-2xl md:text-2xl text-white/70 leading-snug max-w-2xl ml-auto text-left"
      >
        In collaboration with industry partners, we continuously expand the
        boundaries of technology to deliver impactful digital solutions.
      </motion.p>

      {/* Icon + Text list */}
      {/* Logos Grid at the bottom */}
      <motion.div
        className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
      >
        {partners.map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group relative h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 border border-[#C4EF17]/40 shadow-[0_0_20px_rgba(196,239,23,0.35)]" />
            <span className="relative z-10 text-sm tracking-widest uppercase text-white/50 group-hover:text-[#C4EF17] transition">
              Logo
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
