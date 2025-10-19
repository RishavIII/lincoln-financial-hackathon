export default function ResultsCard({ title, premium, best_for, logo }) {
    if (logo) {
        return (
            <div className="flex justify-center p-6 m-5 h-60 basis-1/4 w-full bg-transparent">
                <img src="src\assets\single_logo.png" className="" />
            </div>
        )
    } else {
        return (
            <div className="hover:scale-105 p-6 m-5 h-60 basis-1/4 bg-white rounded-xl shadow hover:shadow-md transition">
                <h2 className="font-black text-3xl mb-2">{title}</h2>
                <p className="text-xl"><strong className="text-green-600">Monthly Premium:</strong> {premium}</p>
                <p className="pt-2 text-l"><strong>Best for</strong>: {best_for}</p>
            </div>
        )
    } 
}