export default function Question({type, title, options}) {
    if (type === "radio") {
        return (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <div className="space-y-2">
                    {options?.map((option, i) => (
                        <label key={i} className="flex items-center gap-2">
                            <input type="radio" name={title} value={option} />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        )
    }

    if (type === "dropdown") {
        return (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <select className="w-full p-2 border rounded">
                    <option value="">Select...</option>
                    {options?.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        )
    }

    if (type === "text") {
        return (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <input type="text" className="w-full p-2 border rounded" />
            </div>
        )
    }

    return null;
}
