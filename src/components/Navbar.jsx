import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">MyDashboard</h1>

        <div className="flex gap-6">
          <Link
            to="/"
            className={`font-medium ${
              location.pathname === "/"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/results"
            className={`font-medium ${
              location.pathname === "/results"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
}
