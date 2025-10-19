import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <nav className={`sticky top-4 z-50 mx-4 rounded-2xl transition-all duration-300 `}>
      <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#4cae4f]">Insurapath</h1>

        <div className="flex gap-6 ">
          <NavbarLink
            url="/"
            name="Dashboard"
          ></NavbarLink>
          <NavbarLink
            url="/results"
            name="Results"
          ></NavbarLink>
          <NavbarLink
            url="/questionnaire"
            name="Questionnaire"
          ></NavbarLink>
          <NavbarLink
            url="/wellness"
            name="Wellness"
          ></NavbarLink>
        </div>
      </div>
    </nav>
  );
}