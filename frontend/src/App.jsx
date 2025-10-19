import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results"
import Questionnaire from "./pages/Questionnaire";
import Wellness from "./pages/Wellness";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-800 scrollbar-width: none overflow-hidden">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/results" element={<Results />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/wellness" element={<Wellness />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
