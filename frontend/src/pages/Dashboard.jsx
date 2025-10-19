import Card from "../components/Card"

export default function Dashboard() {
  return (
    <div className="p-8 min-h-screen relative overflow-hidden">
      <style>{`
        html, body {
          overflow: hidden !important;
          height: 100vh;
          position: fixed;
          width: 100%;
        }
        @keyframes gradient-bg {
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

        .animated-bg {
          background: linear-gradient(-45deg, #1e3a8a, #1e40af, #0e7490, #047857, #059669);
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
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

        @keyframes gradient-shift-green {
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

        /* Particles coming from different edges */
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

        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .logo-glow {
          filter: drop-shadow(0 0 30px rgba(76, 174, 79, 0.4));
        }

        .gradient-border-btn {
          position: relative;
          background: linear-gradient(135deg, #059669, #10b981, #34d399, #6ee7b7, #059669);
          background-size: 300% 300%;
          animation: gradient-shift-green 3s ease infinite;
          border-radius: 0.75rem;
          padding: 3px;
        }
        
        .gradient-border-btn::after {
          content: '';
          position: absolute;
          inset: 3px;
          background: rgba(16, 185, 129, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 0.6rem;
          z-index: 1;
          transition: background 0.3s ease;
        }

        .gradient-border-btn span {
          position: relative;
          z-index: 2;
        }

        .gradient-border-btn:hover::after {
          background: rgba(16, 185, 129, 0.3);
        }

        .gradient-border-btn:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
        }

        /* Particles positioned at different screen edges */
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

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 animated-bg -z-10"></div>
      
      {/* Flying circles from different edges - won't block center */}
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

      {/* Floating shapes in background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="p-12 min-h-[calc(85vh)] flex justify-center items-center relative z-10">
        <div className="px-20 flex-col">
          {/* Logo with fade in and glow */}
          <div className="fade-in-up logo-glow flex justify-center mb-8">
            <img 
              src="src/assets/insurapath-high-resolution-logo-transparent.png" 
              alt="Insurapath Logo" 
              className="h-[20vh] rounded-lg hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Tagline with animation */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="text-4xl text-white font-bold text-center mb-8 drop-shadow-lg">
              Your journey to the right coverage
            </div>
          </div>
    
          {/* Button with simple green gradient border */}
          <div className="flex justify-center items-center fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <button className="gradient-border-btn h-20 px-8 py-2 text-white rounded-xl transition-all duration-300 font-semibold text-lg">
              <span className="p-4">Find My Coverage</span>
            </button>
          </div>

          {/* Feature icons */}
          <div className="mt-16 flex justify-center gap-12 fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <div className="text-center text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Protected</p>
            </div>

            <div className="text-center text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Fast</p>
            </div>

            <div className="text-center text-white/80 hover:text-white transition-colors duration-300">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm font-medium">Affordable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}