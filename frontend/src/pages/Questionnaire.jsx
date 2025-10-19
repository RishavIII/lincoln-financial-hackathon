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
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
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