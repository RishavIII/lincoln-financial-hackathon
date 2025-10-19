export default function Dashboard() {
  return (
    <div className="p-8">
        <div className="p-12 bg-red-500">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 ">
            Dashboard
          </h2>
          <p className="text-gray-600">
            Welcome to your dashboard! You can start building your components and
            visualizations here.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Card 1</h3>
              <p className="text-gray-500">Some quick data or summary text.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Card 2</h3>
              <p className="text-gray-500">Another summary or widget area.</p>
            </div>
          </div>
        </div>
    </div>
  );
}
