import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Questionnaire from "./pages/Questionnaire.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <main className="min-h-screen min-w-screen bg-linear-to-r from-cyan-500 to-blue-500 ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
