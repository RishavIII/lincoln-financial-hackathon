import { useState } from "react";
import Question from "../components/Question";
import { questions } from "../data/questions";

export default function Questionnaire() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // send to back end
      console.log(JSON.stringify(answers));
      await fetch('/api/submit',{
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
    <div className="min-h-screen p-8 relative overflow-hidden">
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }

        /* Flying circles animations */
        @keyframes fromTopLeft {
          0% {
            transform: translate(-150px, -150px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(100vw + 150px), calc(100vh + 150px));
            opacity: 0;
          }
        }

        @keyframes fromTopRight {
          0% {
            transform: translate(150px, -150px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(-100vw - 150px), calc(100vh + 150px));
            opacity: 0;
          }
        }

        @keyframes fromBottomLeft {
          0% {
            transform: translate(-150px, 150px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(100vw + 150px), calc(-100vh - 150px));
            opacity: 0;
          }
        }

        @keyframes fromBottomRight {
          0% {
            transform: translate(150px, 150px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(-100vw - 150px), calc(-100vh - 150px));
            opacity: 0;
          }
        }

        @keyframes fromLeftEdge {
          0% {
            transform: translate(-150px, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(100vw + 150px), 0);
            opacity: 0;
          }
        }

        @keyframes fromRightEdge {
          0% {
            transform: translate(150px, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(-100vw - 150px), 0);
            opacity: 0;
          }
        }

        @keyframes fromBottomUp {
          0% {
            transform: translate(0, 150px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(0, calc(-100vh - 150px));
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        /* Flying circles */
        .flying-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .circle-1 {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.8), rgba(52, 211, 153, 0));
          top: 0;
          left: 0;
          animation: fromTopLeft 20s linear infinite;
        }

        .circle-2 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.6), rgba(16, 185, 129, 0));
          top: 0;
          right: 0;
          animation: fromTopRight 25s linear infinite;
          animation-delay: 5s;
        }

        .circle-3 {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(110, 231, 183, 0.7), rgba(110, 231, 183, 0));
          bottom: 0;
          left: 0;
          animation: fromBottomLeft 18s linear infinite;
          animation-delay: 8s;
        }

        .circle-4 {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(5, 150, 105, 0.5), rgba(5, 150, 105, 0));
          bottom: 0;
          right: 0;
          animation: fromBottomRight 22s linear infinite;
          animation-delay: 3s;
        }

        .circle-5 {
          width: 90px;
          height: 90px;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.6), rgba(52, 211, 153, 0));
          top: 50%;
          left: 0;
          animation: fromLeftEdge 16s linear infinite;
          animation-delay: 10s;
        }

        .circle-6 {
          width: 110px;
          height: 110px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.7), rgba(16, 185, 129, 0));
          top: 50%;
          right: 0;
          animation: fromRightEdge 19s linear infinite;
          animation-delay: 15s;
        }

        .circle-7 {
          width: 95px;
          height: 95px;
          background: radial-gradient(circle, rgba(110, 231, 183, 0.65), rgba(110, 231, 183, 0));
          bottom: 0;
          left: 25%;
          animation: fromBottomUp 21s linear infinite;
          animation-delay: 2s;
        }

        .circle-8 {
          width: 105px;
          height: 105px;
          background: radial-gradient(circle, rgba(5, 150, 105, 0.55), rgba(5, 150, 105, 0));
          bottom: 0;
          right: 30%;
          animation: fromBottomUp 24s linear infinite;
          animation-delay: 12s;
        }
      `}</style>
      
      {/* Animated Background */}
      <div className="fixed inset-0 animated-bg -z-10"></div>
      
      {/* Flying circles from different edges */}
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

      {/* Floating blurred shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="p-12 bg-blue-500/90 backdrop-blur-sm rounded-xl mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-5xl font-semibold text-white mb-4 text-center drop-shadow-lg">
            Questionnaire
          </h2>
          <p className="text-white text-center text-xl">
            Question {currentIndex + 1} of {questions.length}
          </p>
        </div>

        <Question 
          {...currentQuestion}
          value={answers[currentQuestion.id] || ""}
          onChange={handleAnswer}
        /> 

        <div className="flex gap-4 mt-6">
          <button 
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="px-8 py-3 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            ← Back
          </button>
          <button 
            onClick={handleNext}
            className="flex-1 relative px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">
              {currentIndex === questions.length - 1 ? "Submit ✓" : "Next →"}
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </button>
        </div>
      </div>
    </div>
  );
}