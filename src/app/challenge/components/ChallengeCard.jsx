export default function ChallengeCard({ challenger }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-lg font-bold">Challenger: {challenger.username}</h3>
      <p className="text-gray-600">Score: {challenger.highScore}</p>
    </div>
  );
}
