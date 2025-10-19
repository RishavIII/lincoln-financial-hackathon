export default function ResultsCard({ title, premium, best_for, logo }) {
    if (logo) {
        return (
            <div className="flex justify-center p-6 m-5 h-60 basis-1/4 w-full bg-transparent">
                <img src="src\assets\single_logo.png" className="" />
            </div>
        )
    } else {
        return (
            <div className="p-6 m-5 h-60 basis-1/4 bg-white rounded-xl shadow hover:shadow-md transition">
                <h2 className="font-black text-3xl mb-2">{title}</h2>
                <p className="text-gray-500 text-xl"><strong className="">Monthly Premium:</strong> {premium}</p>
                <p className="pt-2 text-l"><strong>Best for</strong>: {best_for}</p>
            </div>
        )
    } 
}