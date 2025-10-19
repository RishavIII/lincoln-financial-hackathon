export default function Question({type, title, options, value, onChange}) {
    if (type === "radio"){
            return (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-4">{title}</h3>
                <div className="space-y-2">
                    {options?.map((option, i) => (
                        <label key={i} className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                name={title}
                                value={option}
                                checked={value === option}
                                onChange={(e) => onChange(e.target.value)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        )
    }

    if (type === "agree"){
        const agreeOptions = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
        return (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-4">{title}</h3>
                <div className="flex gap-4">
                    {agreeOptions.map((option, i) => (
                        <label key={i} className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                name={title}
                                value={option}
                                checked={value === option}
                                onChange={(e) => onChange(e.target.value)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        )
    }

    if (type === "dropdown"){
        return(
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-4">{title}</h3>
                <select 
                    className="w-full p-2 border rounded"
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
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-4">{title}</h3>
                <input 
                    type="date"
                    className="w-full p-2 border rounded"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        )
    }

    if (type == "checkbox"){
        return(
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-4">{title}</h3>
                <div className="space-y-2">
                    {options?.map((option, i) => (
                        <label key={i} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name={option}
                                checked={value.includes(option)}
                                onChange={(e) => {
                                    const newValue = e.target.checked
                                        ? [...value, option]
                                        : value.filter((item) => item !== option);
                                    onChange(newValue);
                                }}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        )
    }
    
    if (type === "slider") {
        return (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-4">{title}</h3>
                <div className="flex items-center gap-4">
                    <span>Strongly Disagree</span>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        className="w-full slider"
                    />
                    <span>Strongly Agree</span>
                </div>
            </div>
        );
    }
}