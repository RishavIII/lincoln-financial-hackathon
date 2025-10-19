import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import { questions } from "../data/questions";

export default function Questionnaire() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  
  // Load saved answers
  useEffect(() => {
    const savedAnswers = localStorage.getItem('questionnaireAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    localStorage.setItem('questionnaireAnswers', JSON.stringify(newAnswers));
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log(JSON.stringify(answers));

      await fetch('http://localhost:8080/process',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(answers)
      });
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden flex items-center justify-center">
      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animated-bg {
          background: linear-gradient(-45deg, #1e3a8a, #1e40af, #0e7490, #047857, #059669);
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
        }

        @keyframes gradient-border-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-border {
          position: relative;
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #10b981, #34d399, #6ee7b7, #3b82f6);
          background-size: 400% 400%;
          animation: gradient-border-animation 3s ease infinite;
          padding: 4px;
          border-radius: 1.5rem;
        }

        .animated-border-content {
          background: rgba(59, 130, 246, 0.9);
          border-radius: 1.25rem;
          position: relative;
          z-index: 1;
        }

        /* Glow effect instead of scale */
        .animated-border:hover {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }

        /* Flying circles animations */
        @keyframes fromTopLeft {
          0% { transform: translate(-150px, -150px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(calc(100vw + 150px), calc(100vh + 150px)); opacity: 0; }
        }
        @keyframes fromTopRight {
          0% { transform: translate(150px, -150px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(calc(-100vw - 150px), calc(100vh + 150px)); opacity: 0; }
        }
        @keyframes fromBottomLeft {
          0% { transform: translate(-150px, 150px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(calc(100vw + 150px), calc(-100vh - 150px)); opacity: 0; }
        }
        @keyframes fromBottomRight {
          0% { transform: translate(150px, 150px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(calc(-100vw - 150px), calc(-100vh - 150px)); opacity: 0; }
        }
        @keyframes fromLeftEdge {
          0% { transform: translate(-150px, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(calc(100vw + 150px), 0); opacity: 0; }
        }
        @keyframes fromRightEdge {
          0% { transform: translate(150px, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(calc(-100vw - 150px), 0); opacity: 0; }
        }
        @keyframes fromBottomUp {
          0% { transform: translate(0, 150px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(0, calc(-100vh - 150px)); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .flying-circle { position: absolute; border-radius: 50%; pointer-events: none; }
        .circle-1 { width: 100px; height: 100px; background: radial-gradient(circle, rgba(52, 211, 153, 0.8), rgba(52, 211, 153, 0)); top: 0; left: 0; animation: fromTopLeft 20s linear infinite; }
        .circle-2 { width: 150px; height: 150px; background: radial-gradient(circle, rgba(16, 185, 129, 0.6), rgba(16, 185, 129, 0)); top: 0; right: 0; animation: fromTopRight 25s linear infinite; animation-delay: 5s; }
        .circle-3 { width: 80px; height: 80px; background: radial-gradient(circle, rgba(110, 231, 183, 0.7), rgba(110, 231, 183, 0)); bottom: 0; left: 0; animation: fromBottomLeft 18s linear infinite; animation-delay: 8s; }
        .circle-4 { width: 120px; height: 120px; background: radial-gradient(circle, rgba(5, 150, 105, 0.5), rgba(5, 150, 105, 0)); bottom: 0; right: 0; animation: fromBottomRight 22s linear infinite; animation-delay: 3s; }
        .circle-5 { width: 90px; height: 90px; background: radial-gradient(circle, rgba(52, 211, 153, 0.6), rgba(52, 211, 153, 0)); top: 50%; left: 0; animation: fromLeftEdge 16s linear infinite; animation-delay: 10s; }
        .circle-6 { width: 110px; height: 110px; background: radial-gradient(circle, rgba(16, 185, 129, 0.7), rgba(16, 185, 129, 0)); top: 50%; right: 0; animation: fromRightEdge 19s linear infinite; animation-delay: 15s; }
        .circle-7 { width: 95px; height: 95px; background: radial-gradient(circle, rgba(110, 231, 183, 0.65), rgba(110, 231, 183, 0)); bottom: 0; left: 25%; animation: fromBottomUp 21s linear infinite; animation-delay: 2s; }
        .circle-8 { width: 105px; height: 105px; background: radial-gradient(circle, rgba(5, 150, 105, 0.55), rgba(5, 150, 105, 0)); bottom: 0; right: 30%; animation: fromBottomUp 24s linear infinite; animation-delay: 12s; }
      `}</style>
      
      <div className="fixed inset-0 animated-bg -z-10"></div>
      
      <div className="fixed inset-0 overflow-visible pointer-events-none z-0">
        <div className="flying-circle circle-1"></div>
        <div className="flying-circle circle-2"></div>
        <div className="flying-circle circle-3"></div>
        <div className="flying-circle circle-4"></div>
        <div className="flying-circle circle-5"></div>
        <div className="flying-circle circle-6"></div>
        <div className="flying-circle circle-7"></div>
        <div className="flying-circle circle-8"></div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-3xl mx-auto relative z-10">
        {/* Header with animated gradient border */}
        <div className="animated-border mb-6 shadow-2xl hover:shadow-3xl transition-all duration-300 fade-in-up">
          <div className="animated-border-content p-8 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
              Questionnaire
            </h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex-1 max-w-md h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-white to-green-300 transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-white font-semibold text-lg whitespace-nowrap">
                {currentIndex + 1} / {questions.length}
              </p>
            </div>
          </div>
        </div>

        {/* Question Card with animated border */}
        <div className="animated-border transition-all duration-300 fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <Question 
            {...currentQuestion}
            value={answers[currentQuestion.id] || (currentQuestion.type === "checkbox" ? [] : "")}
            onChange={handleAnswer}
          /> 
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6 fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <button 
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-xl shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:hover:scale-100"
          >
            ← Back
          </button>
          
          <div className="animated-border flex-1 transition-all duration-300">
            <button 
              onClick={handleNext}
              className="w-full relative px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">
                {currentIndex === questions.length - 1 ? "Submit ✓" : "Next →"}
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}