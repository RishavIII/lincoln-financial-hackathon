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
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
      
      {/* Animated Background */}
      <div className="fixed inset-0 animated-bg -z-10"></div>
      
      {/* Floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="p-12 bg-blue-500 rounded-xl mb-8">
          <h2 className="text-5xl font-semibold text-white mb-4 text-center">
            Questionnaire
          </h2>
          <p className="text-white text-center">
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
            className="px-6 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Back
          </button>
          <button 
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {currentIndex === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}