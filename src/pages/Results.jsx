import ResultsCard from "../components/ResultCard"

export default function Results() {
  return (
    <div className="p-8">
        <div className="p-12 bg-red-500">
            <ResultsCard
                title="Health"
                description="Sample text 1."
                visible={true}
            ></ResultsCard>

            <ResultsCard
                title="Dental"
                description="Sample text 2."
                visible={true}
            ></ResultsCard>

            <ResultsCard
                title="Vision"
                description="Sample text 3."
                visible={true}
            ></ResultsCard>
        </div>
    </div>
  );
}
