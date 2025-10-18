import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <nav className={`sticky top-4 z-50 mx-4 rounded-2xl transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-gray-800 shadow-sm'
    }`}>
      <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#4cae4f]">InsoraPath</h1>

        <div className="flex gap-6">
          <Link
            to="/"
            className={`font-medium ${
              location.pathname === "/"
                ? "text-white border-b-2 border-[#80c684]"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/"
            className={`font-medium ${
              location.pathname === "/"
                ? "text-white border-b-2 border-[#80c684]"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Results
          </Link>
          <Link
            to="/questionnaire"
            className={`font-medium ${
              location.pathname === "/questionnaire"
                ? "text-white border-b-2 border-[#80c684]"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Questionaire
          </Link>
        </div>
      </div>
    </nav>
  );
}