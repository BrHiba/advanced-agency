import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import SidebarContact from "../components/SidebarContact";

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-14 sm:pt-16">

          {/* Top content */}
          <div className="flex flex-col gap-10 sm:gap-12 pb-16 sm:pb-20">
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Have an idea?{" "}
              <span className="text-gray-400 block sm:inline">
                Let&apos;s <br className="hidden sm:block" /> build it together.
              </span>
            </h2>

            {/* Button */}
            <button
              onClick={() => setOpen(true)}
              className="w-fit rounded-lg bg-gray-300 px-6 py-3 text-sm sm:text-md font-medium hover:bg-gray-200 transition cursor-pointer"
            >
              Contact
            </button>

            {/* Social icons */}
            <div className="flex gap-5">
              <a
                href="https://web.facebook.com/Advancedagencymaroc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition text-xl sm:text-2xl"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://www.instagram.com/advanced__agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition text-xl sm:text-2xl"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://wa.me/212666571808"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition text-xl sm:text-2xl"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-500 py-4">
            <span>© 2025 AdvancedAgency</span>
          </div>
        </div>
      </footer>

      <SidebarContact open={open} setOpen={setOpen} />
    </>
  );
}

export default Footer;
