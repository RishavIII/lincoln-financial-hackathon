export default function ResultsCard({ title, description, visible }) {
    if (visible) {
        return (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        )
    } else {
        return ""
    }
}