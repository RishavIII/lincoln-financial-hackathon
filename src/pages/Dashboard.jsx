import Card from "../components/Card"

export default function Dashboard() {
  return (
    <div className="p-8">
      <style>{`
        @keyframes gradient-rotate {
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

        @keyframes gradient-shift {
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

        .gradient-border-btn {
          position: relative;
          background: linear-gradient(90deg, #10b981, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #10b981);
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
          border-radius: 0.5rem;
          padding: 3px;
        }
        
        .gradient-border-btn::after {
          content: '';
          position: absolute;
          inset: 3px;
          background: rgba(76, 174, 79, 0.15);
          border-radius: 0.4rem;
          z-index: 1;
        }

        .gradient-border-btn span {
          position: relative;
          z-index: 2;
        }

        .gradient-border-btn:hover::after {
          background: rgba(76, 174, 79, 0.3);
        }
      `}</style>

      <div className="p-12 min-h-[calc(85vh)] flex justify-center items-center">
        <div className="px-20 flex-col">
          <img 
            src="src\assets\insurapath-high-resolution-logo-transparent.png" 
            alt="description" 
            className="h-[20vh] rounded-lg" 
          />

          <div>
            <div className="text-4xl text-[#c7e5c8] font-bold text-center">
              Your journey to the right coverage
            </div>
          </div>
    
          <div className="flex justify-center items-center h-[20vh]">
            <button className="gradient-border-btn h-20 px-6 py-2 text-white rounded-lg transition-all duration-300 hover:scale-105">
              <span className="font-semibold">Find My Coverage</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}