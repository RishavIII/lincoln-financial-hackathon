import React, { useState } from 'react';

export default function CompoundInterestPage() {
  const [principal, setPrincipal] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [interestRate, setInterestRate] = useState(7);
  const [years, setYears] = useState(10);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentYear, setCurrentYear] = useState(0);

  const calculateFutureValue = (year) => {
    const r = interestRate / 100;
    const n = 12;
    const t = year;
    const fvPrincipal = principal * Math.pow(1 + r/n, n*t);
    const fvContributions = monthlyContribution * ((Math.pow(1 + r/n, n*t) - 1) / (r/n));
    return fvPrincipal + fvContributions;
  };

  const totalInvested = principal + (monthlyContribution * 12 * years);
  const futureValue = calculateFutureValue(years);
  const totalGain = futureValue - totalInvested;
  const currentValue = calculateFutureValue(currentYear);

  const fastForward = () => {
    setIsAnimating(true);
    setCurrentYear(0);
    let year = 0;
    const interval = setInterval(() => {
      year += 1;
      setCurrentYear(year);
      if (year >= years) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 200);
  };

  const treeGrowth = Math.min((currentValue / futureValue) * 100, 100);

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      <style>{`
        @keyframes gradient-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animated-bg {
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
          background-size: 400% 400%;
          animation: gradient-bg 15s ease infinite;
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
          background: rgba(255, 255, 255, 0.95);
          border-radius: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .animated-border:hover {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }
      `}</style>
      
      {/* Animated Background */}
      <div className="fixed inset-0 animated-bg -z-10"></div>
      
      {/* Floating shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========== SECTION 1: EDUCATIONAL CONTENT ========== */}
        <div className="mb-16 fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <h1 className="text-6xl font-bold text-white text-center mb-4">The Power of Compound Interest</h1>
          <p className="text-2xl text-cyan-300 text-center mb-8">Why starting early can make you rich!</p>
          
          {/* CTA Button to Simulator */}
          <div className="text-center mb-12">
            <button 
              onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-110 shadow-2xl animate-pulse"
            >
              🚀 Try the Simulator Now!
            </button>
          </div>

          {/* What is Compound Interest */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-cyan-400/30 mb-8">
            <h2 className="text-4xl font-bold text-white mb-6 text-center"> What is Compound Interest?</h2>
            <div className="text-white text-xl space-y-4">
              <p className="text-center text-2xl text-cyan-200">
                "Interest earning interest" - Your money makes money, and that money makes MORE money!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-green-500/20 rounded-2xl p-6 border-2 border-green-400 text-center">
                  <div className="text-6xl mb-4">📈</div>
                  <div className="text-2xl font-bold text-green-300 mb-2">Year 1</div>
                  <div className="text-lg">You invest $1,000</div>
                  <div className="text-lg">Earn $70 (7%)</div>
                  <div className="text-3xl font-bold text-green-400 mt-2">= $1,070</div>
                </div>
                <div className="bg-blue-500/20 rounded-2xl p-6 border-2 border-blue-400 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="text-2xl font-bold text-blue-300 mb-2">Year 2</div>
                  <div className="text-lg">Now you have $1,070</div>
                  <div className="text-lg">Earn $75 (7% of $1,070)</div>
                  <div className="text-3xl font-bold text-blue-400 mt-2">= $1,145</div>
                </div>
                <div className="bg-purple-500/20 rounded-2xl p-6 border-2 border-purple-400 text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-2xl font-bold text-purple-300 mb-2">Year 30</div>
                  <div className="text-lg">Let it grow...</div>
                  <div className="text-lg">Keep compounding!</div>
                  <div className="text-3xl font-bold text-purple-400 mt-2">= $7,612</div>
                </div>
              </div>
            </div>
          </div>

          {/* Coffee Money Challenge */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-amber-400/30 mb-8">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">☕ The $217,000 Coffee</h2>
            <p className="text-xl text-white/90 text-center mb-8">Your daily coffee habit is costing you a fortune!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-500/30 to-pink-600/30 rounded-3xl p-8 border-2 border-red-400">
                <div className="text-center">
                  <div className="text-8xl mb-4">☕</div>
                  <div className="text-red-200 text-3xl font-bold mb-6">Buy $5 Coffee Daily</div>
                  <div className="text-white text-xl space-y-4">
                    <div className="bg-red-900/30 rounded-xl p-4">
                      <div className="text-red-200">Daily:</div>
                      <div className="text-4xl font-bold">$5.00</div>
                    </div>
                    <div className="bg-red-900/30 rounded-xl p-4">
                      <div className="text-red-200">Yearly:</div>
                      <div className="text-4xl font-bold">$1,825</div>
                    </div>
                    <div className="bg-red-900/30 rounded-xl p-4">
                      <div className="text-red-200">30 Years Total:</div>
                      <div className="text-5xl font-bold text-red-300">$54,750</div>
                      <div className="text-sm text-red-200 mt-2">💸 All gone on coffee!</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-3xl p-8 border-2 border-green-400">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏠</div>
                  <div className="text-green-200 text-3xl font-bold mb-6">Make Coffee at Home</div>
                  <div className="text-white text-xl space-y-4">
                    <div className="bg-green-900/30 rounded-xl p-4">
                      <div className="text-green-200">Daily Cost:</div>
                      <div className="text-4xl font-bold">$0.50</div>
                    </div>
                    <div className="bg-green-900/30 rounded-xl p-4">
                      <div className="text-green-200">Daily Savings:</div>
                      <div className="text-4xl font-bold">$4.50</div>
                    </div>
                    <div className="bg-green-900/30 rounded-xl p-4">
                      <div className="text-green-200">Invested @ 7% for 30 years:</div>
                      <div className="text-5xl font-bold text-green-300">$217,000</div>
                      <div className="text-sm text-green-200 mt-2">🚀 Down payment on a HOUSE!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 bg-yellow-500/20 border-2 border-yellow-400 rounded-2xl p-6">
              <div className="text-yellow-200 text-3xl font-bold">
                💰 Small daily expenses = BIG lifetime costs!
              </div>
              <div className="text-white text-xl mt-2">
                Think about: Lunch out ($10/day), Subscriptions ($50/mo), Impulse buys...
              </div>
            </div>
          </div>

          {/* Key Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-2xl p-6 border-2 border-blue-400">
              <div className="text-6xl text-center mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-blue-300 text-center mb-4">Time is Your Superpower</h3>
              <p className="text-white text-center">
                The earlier you start, the less you need to save. Starting at 25 vs 35 can mean HUNDREDS of thousands more at retirement!
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-6 border-2 border-green-400">
              <div className="text-6xl text-center mb-4">💤</div>
              <h3 className="text-2xl font-bold text-green-300 text-center mb-4">Make Money While You Sleep</h3>
              <p className="text-white text-center">
                Once you invest, compound interest works 24/7, 365 days a year. Your money is always growing, even when you're not thinking about it!
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-6 border-2 border-purple-400">
              <div className="text-6xl text-center mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-purple-300 text-center mb-4">Set It and Forget It</h3>
              <p className="text-white text-center">
                Automate your investments. Even $50/month becomes $50,000+ in 30 years. Small, consistent actions = massive results!
              </p>
            </div>
          </div>

          {/* Rule of 72 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-purple-400/30 mb-8">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">📐 The Rule of 72</h2>
            <p className="text-xl text-white/90 text-center mb-8">Quick way to calculate when your money will DOUBLE!</p>
            
            <div className="bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-3xl p-8 border-2 border-purple-400 mb-6">
              <div className="text-center">
                <div className="text-white text-3xl mb-4">Simple Formula:</div>
                <div className="text-purple-200 text-6xl font-bold">72 ÷ Interest Rate = Years</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-red-500/20 rounded-xl p-4 border border-red-400 text-center">
                <div className="text-3xl font-bold text-red-300 mb-2">1%</div>
                <div className="text-white text-sm">Savings Account</div>
                <div className="text-2xl font-bold text-red-200 mt-2">72 years</div>
                <div className="text-xs text-red-200">to double 😴</div>
              </div>
              <div className="bg-yellow-500/20 rounded-xl p-4 border border-yellow-400 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">5%</div>
                <div className="text-white text-sm">Bonds</div>
                <div className="text-2xl font-bold text-yellow-200 mt-2">14 years</div>
                <div className="text-xs text-yellow-200">to double 👍</div>
              </div>
              <div className="bg-green-500/20 rounded-xl p-4 border border-green-400 text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">7%</div>
                <div className="text-white text-sm">Stock Market</div>
                <div className="text-2xl font-bold text-green-200 mt-2">10 years</div>
                <div className="text-xs text-green-200">to double 🚀</div>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-400 text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">12%</div>
                <div className="text-white text-sm">Growth Stocks</div>
                <div className="text-2xl font-bold text-blue-200 mt-2">6 years</div>
                <div className="text-xs text-blue-200">to double 🔥</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 2: INTERACTIVE TIME MACHINE ========== */}
        <div id="simulator" className="border-t-4 border-cyan-400 pt-16 fade-in-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h1 className="text-6xl font-bold text-white text-center mb-4">⏰ Time Machine Simulator</h1>
          <p className="text-2xl text-cyan-300 text-center mb-12">See YOUR money grow in real-time!</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-cyan-400/30">
              <h2 className="text-3xl font-bold text-white mb-6">⚡ Your Numbers</h2>
              
              <div className="mb-6">
                <label className="text-white font-semibold text-lg mb-2 block">💰 Starting Amount: ${principal.toLocaleString()}</label>
                <input type="range" min="100" max="50000" step="100" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full h-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg" />
              </div>

              <div className="mb-6">
                <label className="text-white font-semibold text-lg mb-2 block">📅 Monthly Contribution: ${monthlyContribution}/mo</label>
                <input type="range" min="0" max="2000" step="50" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} className="w-full h-3 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-lg" />
              </div>

              <div className="mb-6">
                <label className="text-white font-semibold text-lg mb-2 block">📈 Interest Rate: {interestRate}%</label>
                <input type="range" min="1" max="15" step="0.5" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-3 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg" />
              </div>

              <div className="mb-8">
                <label className="text-white font-semibold text-lg mb-2 block">⏳ Time Period: {years} years</label>
                <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-3 bg-gradient-to-r from-orange-400 to-red-600 rounded-lg" />
              </div>

              <button onClick={fastForward} disabled={isAnimating} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-2xl py-6 rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 shadow-2xl">
                {isAnimating ? '⚡ Time Traveling...' : '🚀 Fast Forward!'}
              </button>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-green-500/20 rounded-xl p-4 border border-green-400/30">
                  <div className="text-green-300 text-xs mb-1 font-semibold">You Invest</div>
                  <div className="text-green-400 font-bold text-lg">${totalInvested.toLocaleString()}</div>
                </div>
                <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-400/30">
                  <div className="text-blue-300 text-xs mb-1 font-semibold">You Earn</div>
                  <div className="text-blue-400 font-bold text-lg">${totalGain.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                </div>
                <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-400/30">
                  <div className="text-purple-300 text-xs mb-1 font-semibold">Total Growth</div>
                  <div className="text-purple-400 font-bold text-lg">{((totalGain / totalInvested) * 100).toFixed(0)}%</div>
                </div>
              </div>
            </div>

            {/* Tree Visualization */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-cyan-400/30 relative">
              <h2 className="text-3xl font-bold text-white mb-6">🌳 Watch It Grow!</h2>
              
              {isAnimating && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                  <div className="bg-black/80 rounded-full px-8 py-4 border-4 border-cyan-400 animate-pulse">
                    <div className="text-6xl font-bold text-cyan-400">Year {currentYear}</div>
                  </div>
                </div>
              )}

              <div className="relative h-96 flex items-end justify-center">
                <div className="absolute bottom-0 w-16 bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-lg" style={{ height: `${Math.max(treeGrowth * 0.4, 20)}px` }}></div>
                <div className="absolute bottom-20 w-64 h-64 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl" style={{ transform: `scale(${treeGrowth / 100})`, opacity: Math.max(treeGrowth / 100, 0.3) }}>
                  <div className="text-center">
                    <div className="text-white text-5xl font-bold mb-2 drop-shadow-lg">${currentValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                    <div className="text-white/90 text-xl drop-shadow">Year {currentYear}</div>
                  </div>
                </div>
              </div>

              {!isAnimating && currentYear === years && (
                <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-center shadow-2xl animate-pulse">
                  <div className="text-white text-2xl font-bold mb-2">🎉 After {years} years, you'll have:</div>
                  <div className="text-white text-6xl font-black">${futureValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</div>
                  <div className="text-white/90 text-xl mt-2">You earned ${totalGain.toLocaleString(undefined, {maximumFractionDigits: 0})} in FREE MONEY! 🚀</div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}