import ResultsCard from "../components/ResultCard"

export default function Results() {
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

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Your Personalized Insurance Plan
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Based on your responses, here's what we recommend
          </p>
        </div>

        {/* Cards Grid */}
        <div className="p-12 flex flex-row flex-wrap justify-center w-full">
          <ResultsCard
              title="Logo"
              logo={true}
          />

          <ResultsCard
              title="Health Insurance (Basic)"
              premium="$125"
              best_for="healthy individuals with minimal healthcare needs"
          />

          <ResultsCard
              title="Dental Insurance"
              premium="$45"
              best_for="routine dental maintenance"
          />

          <ResultsCard
              title="Vision Insurance"
              premium="$12"
              best_for="anyone needing glasses, contacts, or regular eye exams"
          />

          <ResultsCard
              title="Critical Care Insurance"
              premium="$35"
              best_for="individuals who are likely to be diagnosed with a critical illness"
          />

          <ResultsCard
              title="Caregiver Insurance"
              premium="$15"
              best_for="individuals who are involved in long-term care"
          />
        </div>

        {/* Total Cost */}
        <div className="mt-8 flex flex-row flex-wrap justify-center">
          <div className="relative p-8 m-5 basis-full md:basis-1/2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-green-200/30 to-transparent"></div>
            
            <h2 className="text-3xl text-center relative z-10">
              <strong className="text-gray-800">Total Monthly Cost:</strong> 
              <span className="text-green-600 ml-2 text-4xl font-bold">$232</span>
            </h2>
            
            <div className="text-center mt-4 relative z-10">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                💰 Recommended for your profile
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-4 bg-white/95 backdrop-blur-sm text-gray-800 font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            📄 Download Summary
          </button>
          <button className="relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">✅ Proceed to Enrollment</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </button>
        </div>
      </div>
    </div>
  );
}