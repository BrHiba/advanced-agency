import { Mail, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function FullscreenMenu({ open, setOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  const goToContact = () => {
    navigate("/contact");
    setOpen(false);
  };
  const goToAbout = () => {
  navigate("/about");

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 100);

  setOpen(false);
};

  return (
    <div
      className={`
        fixed inset-0 z-50 bg-black/95 backdrop-blur-md text-white
        transition-all duration-500 ease-out
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="h-full grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-x-24">
        
        {/* MENU */}
        <div
          className={`
            flex items-center
            px-10 md:px-50
            transition-all duration-700 ease-out
            ${open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
          `}
        >
          <ul className="space-y-10 text-4xl md:text-5xl font-light">

            <li onClick={goToAbout} className="cursor-pointer hover:opacity-60 transition">
              About
            </li>

            <li onClick={() => goToSection("services")} className="cursor-pointer hover:opacity-60 transition">
              Services
            </li>

            <li onClick={() => goToSection("work")} className="cursor-pointer hover:opacity-60 transition">
              Work
            </li>

            <li onClick={goToContact} className="cursor-pointer hover:opacity-60 transition">
              Contact
            </li>

          </ul>
        </div>

        {/* INFO */}
        <div
          className={`
            flex flex-col justify-center
            px-10 md:px-50
            space-y-14 text-sm
            transition-all duration-700 ease-out delay-150
            ${open ? "translate-x-0 opacity-80" : "translate-x-10 opacity-0"}
          `}
        >
          <div className="flex items-start gap-5">
            <Mail size={36} className="mt-1 opacity-60" />
            <div>
              <p className="font-medium mb-2">Quick contact</p>
              <p className="opacity-60">+212 666 571 808</p>
              <p className="opacity-60">contact@advancedagency.ma</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <MapPin size={36} className="mt-1 opacity-60" />
            <div>
              <p className="font-medium mb-2">Contact address</p>
              <p className="opacity-60">Technopark, 2nd floor</p>
              <p className="opacity-60">Agadir, Morocco</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FullscreenMenu;
