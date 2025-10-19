import { useEffect, useState } from "react";
import chatGptLogo from "../assets/ChatGPT Image Oct 19, 2025, 07_25_55 AM.svg";
import jsPDF from 'jspdf';

// ResultCard Component
function ResultsCard({ title, premium, best_for, tier }) {
  const tierColors = {
    A: "from-emerald-400 to-green-600",
    B: "from-blue-500 to-indigo-600", 
    C: "from-purple-500 to-pink-600"
  };

  const tierBadgeColors = {
    A: "bg-emerald-100 text-black border-emerald-400/30",
    B: "bg-blue-100 text-black border-blue-500/30",
    C: "bg-purple-100 text-black border-purple-500/30"
  };

  return (
    <div className="animated-border m-5 basis-full md:basis-1/3 lg:basis-1/4 transition-all duration-300 hover:scale-105 min-h-[280px]">
      <div className="animated-border-content p-6 overflow-hidden group relative h-full">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex-1">{title}</h3>
            {tier && (
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${tierBadgeColors[tier]}`}>
                Tier {tier}
              </span>
            )}
          </div>
          
          <div className={`text-3xl font-bold bg-gradient-to-r ${tierColors[tier] || 'from-gray-500 to-gray-600'} bg-clip-text text-transparent mb-4`}>
            {premium}<span className="text-lg">/mo</span>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {best_for}
          </p>
        </div>
      </div>
    </div>
  );
}

// Main Results Component
export default function Results() {
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add styles to document
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      html, body {
        overflow-x: hidden !important;
      }

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
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes gradient-shift-teal {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      @keyframes gradient-shift-blue {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      /* Particles from edges */
      @keyframes fromTopLeft {
        0% {
          transform: translate(-150px, -150px);
          opacity: 0;
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
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
        10% { opacity: 1; }
        90% { opacity: 1; }
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
        10% { opacity: 1; }
        90% { opacity: 1; }
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
        10% { opacity: 1; }
        90% { opacity: 1; }
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

      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
        }
        50% {
          box-shadow: 0 0 60px rgba(16, 185, 129, 0.6);
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
        opacity: 0;
      }

      .logo-glow {
        filter: drop-shadow(0 0 30px rgba(76, 174, 79, 0.6));
      }

      /* Card styles with gradient borders */
      .gradient-border-card {
        position: relative;
        background: linear-gradient(135deg, #059669, #10b981, #34d399, #6ee7b7, #059669);
        background-size: 300% 300%;
        animation: gradient-shift-green 3s ease infinite;
        border-radius: 1rem;
        padding: 3px;
      }

      .gradient-border-green {
        position: relative;
        background: linear-gradient(135deg, #059669, #10b981, #34d399, #059669);
        background-size: 300% 300%;
        animation: gradient-shift-green 4s ease infinite;
        border-radius: 1rem;
        padding: 2px;
        transition: all 0.3s ease;
      }

      .gradient-border-teal {
        position: relative;
        background: linear-gradient(135deg, #0891b2, #06b6d4, #22d3ee, #0891b2);
        background-size: 300% 300%;
        animation: gradient-shift-teal 4s ease infinite;
        border-radius: 1rem;
        padding: 2px;
        transition: all 0.3s ease;
      }

      .gradient-border-blue {
        position: relative;
        background: linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd, #3b82f6);
        background-size: 300% 300%;
        animation: gradient-shift-blue 4s ease infinite;
        border-radius: 1rem;
        padding: 2px;
        transition: all 0.3s ease;
      }

      .gradient-border-default {
        position: relative;
        background: linear-gradient(135deg, #6b7280, #9ca3af, #d1d5db, #6b7280);
        background-size: 300% 300%;
        animation: gradient-shift-blue 4s ease infinite;
        border-radius: 1rem;
        padding: 2px;
        transition: all 0.3s ease;
      }

      .card-content {
        background: rgba(16, 185, 129, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 0.9rem;
        padding: 2rem;
        height: 100%;
        overflow: hidden;
        position: relative;
      }

      .card-content-plan {
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(10px);
        border-radius: 0.9rem;
        padding: 1.5rem;
        height: 100%;
      }

      .plan-card:hover {
        transform: scale(1.05) translateY(-5px);
        box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
      }

      .logo-card:hover {
        transform: scale(1.03);
      }

      .logo-card {
        animation-delay: 0.1s;
      }

      .plan-card:nth-child(2) { animation-delay: 0.2s; }
      .plan-card:nth-child(3) { animation-delay: 0.3s; }
      .plan-card:nth-child(4) { animation-delay: 0.4s; }
      .plan-card:nth-child(5) { animation-delay: 0.5s; }
      .plan-card:nth-child(6) { animation-delay: 0.6s; }

              .animated-border {
          position: relative;
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #10b981, #34d399, #6ee7b7, #3b82f6);
          background-size: 400% 400%;
          animation: gradient-border-animation 3s ease infinite;
          padding: 4px;
          border-radius: 1.5rem;
        }

        .animated-border-content {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .animated-border:hover {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
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

      /* Button styles */
      .gradient-border-btn {
        position: relative;
        background: linear-gradient(135deg, #059669, #10b981, #34d399, #6ee7b7, #059669);
        background-size: 300% 300%;
        animation: gradient-shift-green 3s ease infinite;
        border-radius: 0.75rem;
        padding: 3px;
        transition: all 0.3s ease;
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

      .gradient-border-btn:hover {
        transform: scale(1.05) translateY(-2px);
        box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
      }

      .gradient-border-btn:hover::after {
        background: rgba(16, 185, 129, 0.3);
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .loading-spinner {
        animation: spin 1s linear infinite;
      }
    `;
    document.head.appendChild(styleElement);

    // Check for backend error
    const backendError = localStorage.getItem('backendError');
    if (backendError) {
      setError(backendError);
      localStorage.removeItem('backendError');
    }

    // Try to load recommendations from localStorage
    const storedRecommendations = localStorage.getItem('recommendations');
    if (storedRecommendations) {
      try {
        setRecommendations(JSON.parse(storedRecommendations));
      } catch (e) {
        console.error('Failed to parse recommendations:', e);
        setError('Failed to load recommendations');
      }
    } else {
      // Use demo data if no recommendations found
      setRecommendations({
        "health": "B",
        "dental": "B",
        "vison": "B",
        "critical care": "C",
        "caregiver": "B"
      });
    }
    
    setTimeout(() => setLoading(false), 2000); // Add a slight delay for smooth transition

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Plan details from your CSV data
  const planDetails = {
    health: {
      A: { 
        name: "Health Insurance (Option A)", 
        premium: "$125", 
        description: "Healthy individuals with minimal healthcare needs. $3,000 deductible, $6,000 out-of-pocket max"
      },
      B: { 
        name: "Health Insurance (Option B)", 
        premium: "$245", 
        description: "Individuals and families with moderate healthcare needs. $1,500 deductible, $4,000 out-of-pocket max"
      },
      C: { 
        name: "Health Insurance (Option C)", 
        premium: "$380", 
        description: "Those with ongoing medical needs or families planning for major healthcare expenses. $500 deductible, $2,000 out-of-pocket max"
      }
    },
    dental: {
      A: { 
        name: "Dental Insurance (Option A)", 
        premium: "$25", 
        description: "Routine dental maintenance. $1,000 annual maximum. Preventive care 100%, basic 70%, major 50%"
      },
      B: { 
        name: "Dental Insurance (Option B)", 
        premium: "$45", 
        description: "Families or those needing extensive dental work. $2,000 annual maximum. Includes orthodontia up to $1,500"
      },
      C: { 
        name: "Dental Insurance (Option C)", 
        premium: "$0", 
        description: "No dental coverage selected"
      }
    },
    vision: {
      A: { 
        name: "Vision Insurance (Option A)", 
        premium: "$8", 
        description: "Employees who need routine vision care and budget-friendly coverage. Annual eye exam, $100 frame allowance"
      },
      B: { 
        name: "Vision Insurance (Option B)", 
        premium: "$20", 
        description: "Employees who want broader materials coverage and premium lenses. $200 frame allowance, 25% LASIK discount"
      },
      C: { 
        name: "Vision Insurance (Option C)", 
        premium: "$0", 
        description: "No vision coverage selected"
      }
    },
    criticalCare: {
      A: { 
        name: "Critical Care Insurance (Option A)", 
        premium: "$150", 
        description: "Individuals at moderate risk for acute hospitalizations. $1,000 deductible, $6,500 out-of-pocket max"
      },
      B: { 
        name: "Critical Care Insurance (Option B)", 
        premium: "$320", 
        description: "Those with complex medical histories or chronic conditions. $500 deductible, $4,000 out-of-pocket max"
      },
      C: { 
        name: "Critical Care Insurance (Option C)", 
        premium: "$520", 
        description: "Top-tier financial protection for serious illness or injury. $0 deductible, $2,000 out-of-pocket max"
      }
    },
    caregiver: {
      A: { 
        name: "Caregiver Insurance (Option A)", 
        premium: "$0", 
        description: "Employees who occasionally need help managing at-home care. $250 stipend, limited respite care"
      },
      B: { 
        name: "Caregiver Insurance (Option B)", 
        premium: "$40", 
        description: "Employees actively providing care to family members. $750 benefit, adult day care, respite care"
      },
      C: { 
        name: "Caregiver Insurance (Option C)", 
        premium: "$95", 
        description: "Heavy caregiving responsibilities with hands-on support. $1,500 benefit, dedicated care manager"
      }
    }
  };

  // Calculate total monthly cost
  const calculateTotalCost = () => {
    if (!recommendations) return 0;
    
    const costs = [
      planDetails.health[recommendations.health]?.premium,
      planDetails.dental[recommendations.dental]?.premium,
      planDetails.vision[recommendations.vison]?.premium,
      planDetails.criticalCare[recommendations["critical care"]]?.premium,
      planDetails.caregiver[recommendations.caregiver]?.premium
    ];
    
    return costs.reduce((total, premium) => {
      const amount = parseInt((premium || "$0").replace('$', '').replace(',', ''));
      return total + amount;
    }, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen p-8 relative overflow-hidden flex items-center justify-center">
        <div className="fixed inset-0 animated-bg -z-10"></div>
        
        {/* Floating shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="text-center relative z-10 fade-in-up">
          <div className="inline-block w-20 h-20 border-4 border-white/30 border-t-white rounded-full loading-spinner mb-6"></div>
          <div className="text-white text-3xl font-bold mb-4 drop-shadow-lg">Analyzing your responses...</div>
          <div className="text-white/80 text-xl drop-shadow">Creating your personalized plan</div>
          
          {/* Loading dots animation */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  const totalCost = calculateTotalCost();

  const downloadPDF = () => {
    const doc = new jsPDF();
    const answers = JSON.parse(localStorage.getItem('questionnaireAnswers') || '{}');
    
    doc.setFontSize(20);
    doc.text("Your Personalized Insurance Plan", 20, 20);
    
    doc.setFontSize(12);
    let y = 40;
    
    doc.text(`Health Insurance: ${planDetails.health[recommendations?.health]?.name}`, 20, y);
    doc.text(`Premium: ${planDetails.health[recommendations?.health]?.premium}/mo`, 20, y + 7);
    doc.text(`Tier: ${recommendations?.health}`, 20, y + 14);
    y += 30;
    
    doc.text(`Dental Insurance: ${planDetails.dental[recommendations?.dental]?.name}`, 20, y);
    doc.text(`Premium: ${planDetails.dental[recommendations?.dental]?.premium}/mo`, 20, y + 7);
    doc.text(`Tier: ${recommendations?.dental}`, 20, y + 14);
    y += 30;
    
    doc.text(`Vision Insurance: ${planDetails.vision[recommendations?.vison]?.name}`, 20, y);
    doc.text(`Premium: ${planDetails.vision[recommendations?.vison]?.premium}/mo`, 20, y + 7);
    doc.text(`Tier: ${recommendations?.vison}`, 20, y + 14);
    y += 30;
    
    doc.text(`Critical Care: ${planDetails.criticalCare[recommendations?.["critical care"]]?.name}`, 20, y);
    doc.text(`Premium: ${planDetails.criticalCare[recommendations?.["critical care"]]?.premium}/mo`, 20, y + 7);
    doc.text(`Tier: ${recommendations?.["critical care"]}`, 20, y + 14);
    y += 30;
    
    doc.text(`Caregiver Insurance: ${planDetails.caregiver[recommendations?.caregiver]?.name}`, 20, y);
    doc.text(`Premium: ${planDetails.caregiver[recommendations?.caregiver]?.premium}/mo`, 20, y + 7);
    doc.text(`Tier: ${recommendations?.caregiver}`, 20, y + 14);
    y += 30;
    
    doc.setFontSize(16);
    doc.text(`Total Monthly Cost: $${totalCost}`, 20, y);
    y += 20;
    
    doc.setFontSize(14);
    doc.text("Why These Recommendations?", 20, y);
    y += 10;
    
    doc.setFontSize(10);
    let hasReasons = false;
    
    Object.keys(answers).forEach(key => {
      const value = answers[key];
      if (value && value !== '' && value !== 'none') {
        const displayValue = Array.isArray(value) ? value.join(', ') : value;
        doc.text(`- ${key.replace(/_/g, ' ')}: ${displayValue}`, 20, y);
        y += 7;
        hasReasons = true;
      }
    });
    
    if (!hasReasons) {
      doc.text("Based on your profile and needs assessment", 20, y);
    }
    
    doc.save('insurance-plan-summary.pdf');
  };

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Animated Gradient Background */}
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

      {/* Floating shapes in background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Your Personalized Insurance Plan
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Based on your responses, here's what we recommend
          </p>
          
          {error && (
            <div className="mt-4 inline-block bg-yellow-400/20 backdrop-blur-sm text-yellow-100 px-4 py-2 rounded-lg border border-yellow-400/30">
              ⚠️ Using demo data (Backend: {error})
            </div>
          )}
        </div>

        {/* Cards Grid */}
        <div className="p-12 flex flex-row flex-wrap justify-center w-full fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <div className="m-5 basis-full md:basis-1/3 lg:basis-1/4 transition-all duration-300 hover:scale-105 fade-in-up min-h-[280px] flex items-center justify-center" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <img 
              src={chatGptLogo} 
              alt="AI Assistant" 
              className="h-64 w-auto drop-shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:drop-shadow-[0_0_60px_rgba(16,185,129,0.8)] transition-all duration-300" 
            />
          </div>

          <ResultsCard
            title={planDetails.health[recommendations?.health]?.name || "Health Insurance"}
            premium={planDetails.health[recommendations?.health]?.premium || "$245"}
            best_for={planDetails.health[recommendations?.health]?.description || "Standard coverage"}
            tier={recommendations?.health}
          />

          <ResultsCard
            title={planDetails.dental[recommendations?.dental]?.name || "Dental Insurance"}
            premium={planDetails.dental[recommendations?.dental]?.premium || "$45"}
            best_for={planDetails.dental[recommendations?.dental]?.description || "Routine dental care"}
            tier={recommendations?.dental}
          />

          <ResultsCard
            title={planDetails.vision[recommendations?.vison]?.name || "Vision Insurance"}
            premium={planDetails.vision[recommendations?.vison]?.premium || "$20"}
            best_for={planDetails.vision[recommendations?.vison]?.description || "Regular eye exams"}
            tier={recommendations?.vison}
          />

          <ResultsCard
            title={planDetails.criticalCare[recommendations?.["critical care"]]?.name || "Critical Care Insurance"}
            premium={planDetails.criticalCare[recommendations?.["critical care"]]?.premium || "$320"}
            best_for={planDetails.criticalCare[recommendations?.["critical care"]]?.description || "Critical illness protection"}
            tier={recommendations?.["critical care"]}
          />

          <ResultsCard
            title={planDetails.caregiver[recommendations?.caregiver]?.name || "Caregiver Insurance"}
            premium={planDetails.caregiver[recommendations?.caregiver]?.premium || "$40"}
            best_for={planDetails.caregiver[recommendations?.caregiver]?.description || "Long-term care support"}
            tier={recommendations?.caregiver}
          />
        </div>

        {/* Total Cost */}
        <div className="mt-8 flex flex-row flex-wrap justify-center fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="relative p-8 m-5 basis-full md:basis-1/2 gradient-border-card">
            <div className="card-content bg-white/10 backdrop-blur-md">
              <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-green-200/20 to-transparent"></div>
              
              <h2 className="text-3xl text-center relative z-10">
                <strong className="text-white">Total Monthly Cost:</strong> 
                <span className="text-emerald-300 ml-2 text-4xl font-bold drop-shadow-lg">${totalCost}</span>
              </h2>
              
              <div className="text-center mt-6 relative z-10">
                <span className="inline-block bg-emerald-400/20 backdrop-blur-sm text-emerald-200 border border-emerald-400/30 px-6 py-3 rounded-full text-sm font-semibold">
                  ✨ Recommended for your profile
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button onClick={downloadPDF} className="relative px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Summary
            </span>
          </button>
          
          <button className="gradient-border-btn px-8 py-4 text-white font-semibold rounded-xl">
            <span className="flex items-center gap-2 p-2">
              Proceed to Enrollment 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>

        {/* Feature icons at bottom */}
        <div className="mt-16 flex justify-center gap-12 fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="text-center text-white/80 hover:text-white transition-colors duration-300">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 hover:bg-white/20 transition-all duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-sm font-medium">Secure & Private</p>
          </div>

          <div className="text-center text-white/80 hover:text-white transition-colors duration-300">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 hover:bg-white/20 transition-all duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <p className="text-sm font-medium">Quick Process</p>
          </div>

          <div className="text-center text-white/80 hover:text-white transition-colors duration-300">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 hover:bg-white/20 transition-all duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium">Best Value</p>
          </div>
        </div>


      </div>
    </div>
  );
}