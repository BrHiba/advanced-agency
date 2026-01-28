import { useState } from "react";
import { Copy, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [tab, setTab] = useState("inquiries");

  // Tooltip
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY - 30 });
  };
  const handleShowTooltip = (text) => {
    setTooltipText(text);
    setShowTooltip(true);
  };
  const handleHideTooltip = () => setShowTooltip(false);

  const handleCopyEmail = () =>
    navigator.clipboard.writeText("contact@advancedagency.ma");

  // Form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
<section
  id="contact"
  className="relative w-full text-white pt-24 lg:pt-0 
             min-h-screen lg:h-screen 
             overflow-y-auto lg:overflow-hidden"
>

      {/* VIDEO BG */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/contact-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75" />

      {/* CONTENT */}
      <div className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
        {/* LEFT */}
        <div className="flex flex-col justify-end px-5 sm:px-10 lg:px-14 pb-12 sm:pb-16 space-y-6 sm:space-y-8">
          {/* TABS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">

            {["inquiries", "find", "follow"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm tracking-wide transition cursor-pointer ${
                  tab === item
                    ? "bg-white text-black shadow-md"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {item === "inquiries" && "Inquiries"}
                {item === "find" && "Find us"}
                {item === "follow" && "Follow us"}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="space-y-4 sm:space-y-5 max-w-152">
            {/* INQUIRIES */}
            {tab === "inquiries" && (
              <div className="space-y-3 sm:space-y-4">
                <div
                  onMouseEnter={() => handleShowTooltip("COPY")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  onClick={handleCopyEmail}
                  className="cursor-pointer flex items-center gap-3 text-[clamp(1.5rem,4vw,2.6rem)] font-semibold group whitespace-nowrap"
                >
                  <span className="relative truncate max-w-full">
                    contact@advancedagency.ma
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <Copy size={16} className="opacity-60 shrink-0" />
                </div>

                <a
                  href="https://wa.me/212666571808"
                  target="_blank"
                  onMouseEnter={() => handleShowTooltip("Open WhatsApp")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  className="text-sm sm:text-lg group inline-block text-white/60 hover:text-white transition"
                >
                  <span className="relative">
                    +212 666 571 808
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>
            )}

            {/* FIND */}
            {tab === "find" && (
              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Technopark+Agadir"
                  target="_blank"
                  onMouseEnter={() => handleShowTooltip("FIND US")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  className="group inline-flex items-center gap-3 text-[clamp(1.5rem,4vw,2.6rem)] font-semibold whitespace-nowrap"
                >
                  <span className="relative">
                    Technopark, Agadir
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="opacity-60 group-hover:opacity-100 shrink-0"
                  />
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Technopark+Agadir"
                  target="_blank"
                  onMouseEnter={() => handleShowTooltip("FIND US")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  className="text-sm sm:text-lg group w-fit text-white/60 hover:text-white transition"
                >
                  <span className="relative">
                    Get Directions
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </div>
            )}

            {/* FOLLOW */}
            {tab === "follow" && (
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://www.linkedin.com/company/advanced-agency/"
                  target="_blank"
                  onMouseEnter={() => handleShowTooltip("VISIT")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  className="group inline-flex items-center gap-3 text-[clamp(1.5rem,4vw,2.6rem)] font-semibold whitespace-nowrap"
                >
                  <span className="relative">
                    LinkedIn
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="opacity-60 group-hover:opacity-100 shrink-0"
                  />
                </a>

                <p className="text-sm sm:text-lg group w-fit text-white/60 cursor-default hover:text-white transition">
                  <span className="relative">
                    My digital side
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="flex items-center justify-center px-4 sm:px-6 py-10 sm:py-0">
          <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-9 shadow-xl">
            <h3 className="text-lg sm:text-xl mb-5 sm:mb-7 font-light tracking-wide">
              Get in touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-2.5 outline-none focus:border-white text-sm sm:text-base ${
                    errors.name ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-2.5 outline-none focus:border-white text-sm sm:text-base ${
                    errors.email ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>

              <input
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 py-2.5 outline-none focus:border-white text-sm sm:text-base"
              />

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-2.5 outline-none resize-none focus:border-white text-sm sm:text-base ${
                    errors.message ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-2.5 rounded-lg hover:bg-gray-200 transition text-sm sm:text-base font-medium cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{ top: tooltipPos.y, left: tooltipPos.x }}
          className="fixed pointer-events-none bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded shadow-md z-50"
        >
          {tooltipText}
        </div>
      )}
    </section>
  );
}
