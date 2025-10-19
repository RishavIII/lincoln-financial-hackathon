import Card from "../components/Card"

export default function Dashboard() {
  return (
    <div className="p-8">
        <div className="p-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 ">
            Dashboard
          </h2>
          <p className="text-gray-600">
            Welcome to your dashboard! You can start building your components and
            visualizations here.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card 
              title="Card 1"
              description="This is a summary or widget area."
            />
            <Card 
              title="Card 2"
              description="Another summary or widget area."
            />
          </div>
        </div>
    </div>
  );
}
