export default function ResultsCard({ title, premium, best_for, logo }) {
    if (logo) {
        return (
            <div className="flex justify-center p-6 m-5 h-60 basis-1/4 w-full bg-transparent">
                <style>{`
                    @keyframes logo-float {
                        0%, 100% { transform: translateY(0px) scale(1); }
                        50% { transform: translateY(-15px) scale(1.05); }
                    }
                    .logo-animate {
                        animation: logo-float 3s ease-in-out infinite;
                        filter: drop-shadow(0 10px 20px rgba(76, 174, 79, 0.3));
                    }
                `}</style>
                <img 
                    src="src\assets\single_logo.png" 
                    className="logo-animate hover:scale-110 transition-transform duration-300" 
                    alt="Logo"
                />
            </div>
        )
    } else {
        return (
            <div className="animated-border m-5 h-60 basis-1/4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                <div className="animated-border-content p-6 h-full relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent"></div>
                
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                    <h2 className="font-black text-3xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-xl mb-3">
                        <strong className="text-gray-700">Monthly Premium:</strong> 
                        <span className="text-green-600 font-bold ml-1">{premium}</span>
                    </p>
                    <p className="pt-2 text-base text-gray-600">
                        <strong className="text-gray-700">Best for</strong>: {best_for}
                    </p>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
        )
    } 
}