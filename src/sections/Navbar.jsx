import { useState } from "react";
import FullscreenMenu from "../components/FullscreenMenu";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full h-20 flex items-center justify-between px-14 z-60 bg-transparent">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo-advanced.png"
            alt="Advanced Agency Logo"
            className="h-8 md:h-9 object-contain opacity-90 hover:opacity-100 transition cursor-pointer"
          />
        </Link>

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white tracking-widest opacity-90 hover:opacity-100 transition cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      <FullscreenMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
