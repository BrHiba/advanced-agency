// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const services = [
  { title: "Mobile Applications", desc: "High-end iOS & Android experiences." },
  { title: "Web Development", desc: "Fast, scalable modern platforms." },
  { title: "Agentic AI", desc: "Autonomous intelligent systems." },
  {
    title: "E-commerce Development",
    desc: "Conversion-focused online stores.",
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden font-(--font-body)">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,239,23,0.08),transparent_45%)]"></div>

      <section className="relative min-h-screen grid md:grid-cols-2">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true }}
          className="relative z-10 px-8 md:px-24 py-28 flex flex-col justify-center"
        >
          <h1 className="text-xs uppercase tracking-[0.4em] text-(--color-default) mb-4">
            Who we are{" "}
          </h1>

          {/* Editorial heading */}
          <h2 className="font-editorial text-4xl md:text-6xl xl:text-7xl leading-[1.05] mb-8 text-white">
            Building
            <br />
            <span className="italic text-(--color-primary)">
              Digital Futures
            </span>
            <br />
            That Lead.
          </h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.9 }}
            viewport={{ once: true }}
            className="text-(--color-default) max-w-xl leading-relaxed mb-14"
          >
            We design bold digital systems where creativity, performance and
            intelligent automation converge — engineered to scale, crafted to
            dominate.
          </motion.p>

          {/* SERVICES */}
          <div className="grid sm:grid-cols-2 gap-7 max-w-xl ">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative p-6 border rounded-4xl border-white/10 overflow-hidden transition-all duration-500 bg-black"
              >
                {/* Soft center glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(196,239,23,0.12),transparent_100%)]"></div>

                <h3 className="relative font-medium text-lg mb-2 text-white">
                  {s.title}
                </h3>
                <p className="relative text-sm text-(--color-default) leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN — FULL BACKGROUND VIDEO */}
        <motion.div
          initial={{ scale: 1.12 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative hidden md:block overflow-hidden"
        >
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/contact-bg.mp4" type="video/mp4" />
          </video>

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-black/70 via-black/30 to-black/10"></div>

          {/* Neon edge glow */}

          {/* Grain */}
          <div className="absolute inset-0 opacity-[0.12] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        </motion.div>
      </section>
    </main>
  );
}
