export default function ResultsCard({ title, description, visible }) {
    if (visible) {
        return (
            // maybe not fixed height
            <div className="p-6 m-5 h-100  basis-1/4 w-full bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        )
    } else {
        return ""
    }
}