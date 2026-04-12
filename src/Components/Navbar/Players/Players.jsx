import { use, useState } from "react";
import AvailabalePlayers from "../../AvalabalePlayers/AvailabalePlayers";
import SelectedPlayers from "../../SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);
  const [selectedType, setSelectedType] = useState("available"); // Initial state
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Player delete functionality
  const handleDelete = (id) => {
    const remainingPlayers = selectedPlayers.filter((p) => p.playerId !== id);
    setSelectedPlayers(remainingPlayers);
  };

  return (
    <div className="container mx-auto my-[60px] px-4">
      {/* Header with Toggle Buttons */}
      <div className="flex justify-between gap-4 items-center mb-10">
        <div className="flex-1">
          {selectedType === "available" ? (
            <h2 className="font-bold text-3xl">Available Players</h2>
          ) : (
            <h2 className="font-bold text-3xl">Selected Players ({selectedPlayers.length}/6)</h2>
          )}
        </div>

        <div className="flex border rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => setSelectedType("available")}
            className={`px-8 py-3 font-bold transition-all ${
              selectedType === "available" ? "bg-[#E7FE29] text-black" : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("seleted")} // Fixed typo "seleted" to match your state logic
            className={`px-8 py-3 font-bold transition-all ${
              selectedType === "seleted" ? "bg-[#E7FE29] text-black" : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* Toggle View Condition */}
      {selectedType === "available" ? (
        <AvailabalePlayers
          players={players}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          handleDelete={handleDelete}
          setSelectedType={setSelectedType}
        />
      )}
    </div>
  );
};

export default Players;