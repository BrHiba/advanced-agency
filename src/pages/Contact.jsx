import { useState } from "react";
import { Copy, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [tab, setTab] = useState("inquiries");

  // Tooltip state
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY - 35 });
  };

  const handleShowTooltip = (text) => {
    setTooltipText(text);
    setShowTooltip(true);
  };
  const handleHideTooltip = () => setShowTooltip(false);

  const handleCopyEmail = () =>
    navigator.clipboard.writeText("contact@advancedagency.ma");

  // Form state & validation
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

    // reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen w-full overflow-hidden text-white"
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
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        {/* LEFT */}
        <div className="flex flex-col justify-end px-10 lg:px-15 pb-20 space-y-10">
          {/* TABS */}
          <div className="flex gap-3">
            {["inquiries", "find", "follow"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-5 py-2 rounded-xl text-sm transition cursor-pointer ${
                  tab === item
                    ? "bg-white text-black"
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
          <div className="space-y-6">
            {/* INQUIRIES */}
            {tab === "inquiries" && (
              <div className="space-y-4">
                <div
                  onMouseEnter={() => handleShowTooltip("COPY")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  onClick={handleCopyEmail}
                  className="cursor-pointer flex items-center gap-3 text-5xl font-bold group" // <-- hna zedt group
                >
                  <span className="relative">
                    contact@advancedagency.ma
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <Copy size={18} className="opacity-60" />
                </div>

                <a
                  href="https://wa.me/212666571808"
                  target="_blank"
                  onMouseEnter={() => handleShowTooltip("Open WhatsApp")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  className="text-xl group inline-block text-white/60 hover:text-white transition"
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
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Technopark+Agadir"
                  target="_blank"
                  onMouseEnter={() => handleShowTooltip("FIND US")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  className="group inline-flex items-center gap-3 text-5xl font-bold"
                >
                  <span className="relative">
                    Technopark, Agadir
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="opacity-60 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Technopark+Agadir"
                  target="_blank"
                  onMouseEnter={() => handleShowTooltip("FIND US")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  className="text-xl group w-fit text-white/60 hover:text-white transition"
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
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/company/advanced-agency/"
                  target="_blank"
                  onMouseEnter={() => handleShowTooltip("VISIT")}
                  onMouseLeave={handleHideTooltip}
                  onMouseMove={handleMouseMove}
                  className="group inline-flex items-center gap-3 text-5xl font-bold"
                >
                  <span className="relative">
                    LinkedIn
                    <span className="absolute left-0 -bottom-1 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="opacity-60 group-hover:opacity-100"
                  />
                </a>

                <p className="text-xl group w-fit text-white/60 cursor-default hover:text-white transition">
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
        <div className="flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-10">
            <h3 className="text-2xl mb-8 font-light">Get in touch</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 outline-none focus:border-white ${
                    errors.name ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.name && (
                  <p className="text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 outline-none focus:border-white ${
                    errors.email ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* COMPANY */}
              <input
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 py-3 outline-none focus:border-white"
              />

              {/* MESSAGE */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 outline-none resize-none focus:border-white ${
                    errors.message ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition"
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
          className="fixed pointer-events-none bg-black/70 backdrop-blur-sm text-white text-sm px-2 py-1 rounded shadow-md z-50"
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}
