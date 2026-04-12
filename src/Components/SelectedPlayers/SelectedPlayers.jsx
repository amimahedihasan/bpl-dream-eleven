import { MdDelete } from 'react-icons/md';

const SelectedPlayers = ({ selectedPlayers, handleDelete, setSelectedType }) => {
    return (
        <div className="space-y-6">
            {selectedPlayers.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-400">No players selected yet!</h2>
                </div>
            ) : (
                selectedPlayers.map((player) => (
                    <div key={player.playerId} className="flex items-center justify-between p-4 border rounded-2xl bg-white shadow-sm">
                        <div className="flex items-center gap-6">
                            <img src={player.image} alt={player.name} className="w-20 h-20 object-cover rounded-2xl" />
                            <div>
                                <h2 className="font-bold text-xl">{player.name}</h2>
                                <p className="text-gray-500">{player.role}</p>
                                <p className="font-bold text-gray-800 mt-1">${player.price}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDelete(player.playerId)}
                            className="text-red-400 hover:text-red-600 text-3xl p-2"
                        >
                            <MdDelete />
                        </button>
                    </div>
                ))
            )}

            <div className="mt-10">
                <div className="border border-black inline-block p-1 rounded-2xl">
                    <button 
                        onClick={() => setSelectedType("available")} // Switches back to Available view
                        className="bg-[#E7FE29] hover:bg-[#d4e924] font-bold py-3 px-8 rounded-xl"
                    >
                        Add More Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayers;