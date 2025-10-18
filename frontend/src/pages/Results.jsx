import ResultsCard from "../components/ResultCard"

export default function Results() {
  return (
    <div className="p-8">
        <div className="p-12 flex flex-row flex-wrap justify-center">
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

            <ResultsCard
                title="Critical Care"
                description="Sample text 4."
                visible={true}
            ></ResultsCard>

            <ResultsCard
                title="Caregiver"
                description="Sample text 5."
                visible={true}
            ></ResultsCard>
        </div>
    </div>
  );
}
