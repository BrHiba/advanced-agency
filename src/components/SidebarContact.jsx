/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { X, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function SidebarContact({ open, setOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* SIDEBAR */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="
              fixed top-0 right-0 z-70 h-full w-full max-w-xl
              bg-white text-(--color-heading)
              shadow-2xl
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-6 right-6
                w-10 h-10 rounded-full
                border border-(--color-border)
                hover:bg-(--color-gray)
                transition cursor-pointer
              "
            >
              <X className="mx-auto" size={20} />
            </button>

            {/* CONTENT */}
            <div className="h-full flex flex-col justify-between p-10 overflow-y-auto hide-scroll">
              {/* HEADER */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-3xl font-bold text-(--color-heading) leading-snug"
                >
                  Let’s talk about your project
                </motion.h2>

                <p className="mt-4 text-(--color-default) max-w-sm">
                  Tell us about your project and let’s create something
                  exceptional together.
                </p>

                {/* FORM */}
                <form className="mt-10 grid grid-cols-1 gap-6">
                  {[
                    { name: "name", placeholder: "Your name" },
                    { name: "company", placeholder: "Company name" },
                    { name: "email", placeholder: "Email address" },
                    { name: "phone", placeholder: "Phone number" },
                  ].map((field, i) => (
                    <motion.input
                      key={i}
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="
                        w-full bg-transparent
                        border-b border-(--color-border)
                        py-3 outline-none
                        focus:border-(--color-primary)
                        transition
                      "
                    />
                  ))}

                  <motion.textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project"
                    onChange={handleChange}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="
                      w-full bg-transparent resize-none
                      border-b border-(--color-border)
                      py-3 outline-none
                      focus:border-(--color-primary)
                      transition
                    "
                  />

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="
                      mt-6 rounded-full py-4 font-medium tracking-wide
                      bg-(--color-primary)
                      text-black cursor-pointer
                      shadow-lg shadow-(color:--color-primary)/30
                    "
                  >
                    Send message →
                  </motion.button>
                </form>
              </div>
              {/* INFO */}
              <div className="mt-16 pt-8 border-t border-gray-200 space-y-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={16} /> +212 666 571 808
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} /> contact@advancedagency.ma
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  Technopark, Agadir
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default SidebarContact;
