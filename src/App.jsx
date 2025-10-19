import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results"

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-emerald-600">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
