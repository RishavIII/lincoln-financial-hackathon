export default function Question({type, title, options, value, onChange}) {
    if (type === "radio"){
        return (
            <div className="relative p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                
                <h3 className="font-semibold text-lg mb-4 relative z-10">{title}</h3>
                <div className="space-y-2 relative z-10">
                    {options?.map((option, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:translate-x-2">
                            <input 
                                type="radio" 
                                name={title}
                                value={option}
                                checked={value === option}
                                onChange={(e) => onChange(e.target.value)}
                                className="w-4 h-4 text-blue-600"
                            />
                            <span className={value === option ? 'font-semibold text-blue-600' : ''}>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        )
    }

    if (type === "agree"){
        const agreeOptions = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
        return (
            <div className="relative p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="font-semibold text-lg mb-4 relative z-10">{title}</h3>
                <div className="flex gap-3 flex-wrap relative z-10">
                    {agreeOptions.map((option, i) => (
                        <label key={i} className="flex flex-col items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-green-50 transition-all duration-200 group/option">
                            <input 
                                type="radio" 
                                name={title}
                                value={option}
                                checked={value === option}
                                onChange={(e) => onChange(e.target.value)}
                                className="w-4 h-4 text-green-600"
                            />
                            <span className={`text-sm text-center ${value === option ? 'font-bold text-green-600 scale-110' : 'group-hover/option:scale-105'} transition-all duration-200`}>
                                {option}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        )
    }

    if (type === "dropdown"){
        return(
            <div className="relative p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Pulse background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="font-semibold text-lg mb-4 relative z-10">{title}</h3>
                <select 
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 relative z-10 hover:border-blue-400"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="">Select...</option>
                    {options?.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        )
    }

    if (type === "date"){
        return(
            <div className="relative p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="font-semibold text-lg mb-4 relative z-10">{title}</h3>
                <input 
                    type="date"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 relative z-10 hover:border-purple-400"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        )
    }

    if (type === "checkbox"){
        const currentValue = value || [];
        return(
            <div className="relative p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {/* Floating circles */}
                <div className="absolute top-2 right-2 w-20 h-20 bg-teal-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="font-semibold text-lg mb-4 relative z-10">{title}</h3>
                <div className="space-y-2 relative z-10">
                    {options?.map((option, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-teal-50 transition-all duration-200 hover:translate-x-2 group/checkbox">
                            <input
                                type="checkbox"
                                name={option}
                                checked={currentValue.includes(option)}
                                onChange={(e) => {
                                    const newValue = e.target.checked
                                        ? [...currentValue, option]
                                        : currentValue.filter((item) => item !== option);
                                    onChange(newValue);
                                }}
                                className="w-4 h-4 text-teal-600 rounded"
                            />
                            <span className={currentValue.includes(option) ? 'font-semibold text-teal-600' : 'group-hover/checkbox:text-teal-600'}>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        )
    }
    
    if (type === "slider") {
        return (
            <div className="relative p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <style>{`
                    .custom-slider {
                        -webkit-appearance: none;
                        appearance: none;
                        height: 8px;
                        border-radius: 5px;
                        background: linear-gradient(to right, #ef4444 0%, #f59e0b 50%, #10b981 100%);
                        outline: none;
                    }
                    
                    .custom-slider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background: white;
                        cursor: pointer;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                        border: 3px solid #3b82f6;
                        transition: all 0.2s;
                    }
                    
                    .custom-slider::-webkit-slider-thumb:hover {
                        transform: scale(1.2);
                        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
                    }
                    
                    .custom-slider::-moz-range-thumb {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background: white;
                        cursor: pointer;
                        border: 3px solid #3b82f6;
                        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                        transition: all 0.2s;
                    }
                    
                    .custom-slider::-moz-range-thumb:hover {
                        transform: scale(1.2);
                        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.5);
                    }
                `}</style>
                
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 via-yellow-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="font-semibold text-lg mb-6 relative z-10">{title}</h3>
                <div className="relative z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium whitespace-nowrap">Strongly Disagree</span>
                        <div className="flex-1 relative">
                            <input
                                type="range"
                                min="0"
                                max="10"
                                value={value || 5}
                                onChange={(e) => onChange(e.target.value)}
                                className="w-full custom-slider"
                            />
                        </div>
                        <span className="text-sm font-medium whitespace-nowrap">Strongly Agree</span>
                    </div>
                </div>
            </div>
        );
    }
}