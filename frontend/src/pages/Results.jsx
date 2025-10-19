import ResultsCard from "../components/ResultCard"

export default function Results() {
  return (
    <div className="p-8">
        <div className="p-12 flex flex-row flex-wrap justify-center w-full">
            <ResultsCard
                title="Logo"
                logo={true}
            ></ResultsCard>

            <ResultsCard
                title="Health Insurance (Basic)"
                premium="$125"
                best_for="healthy individuals with minimal healthcare needs"
            ></ResultsCard>

            <ResultsCard
                title="Dental Insurance"
                premium="$45"
                best_for="routine dental maintenance"
            ></ResultsCard>

            <ResultsCard
                title="Vision Insurance"
                premium="$12"
                best_for="anyone needing glasses, contacts, or regular eye exams"
            ></ResultsCard>

            <ResultsCard
                title="Critical Care Insurance"
                premium="$35"
                best_for="individuals who are likely to be diagnosed with a critical illness"
            ></ResultsCard>

            <ResultsCard
                title="Caregiver Insurance"
                premium="$15"
                best_for="individuals who are involved in long-term care."
            ></ResultsCard>
        </div>

        <div className="mt-4 flex flex-row flex-wrap justify-center">
            <div className="p-6 m-5 h-20 basis-1/2 bg-white rounded-xl shadow hover:shadow-md transition">
                <h2 className="text-2xl text-center"><strong>Total Monthly Cost:</strong> $232</h2>
            </div>
        </div>
    </div>
  );
}
