import Card from "../UI/Card";

const AvailabalePlayers = ({ players, setCoin, coin,setSelectedPlayers,selectedPlayers}) => {
  console.log(players);

  return (
    <div className="mt-7.5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player, index) => {
          return <Card key={index} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}coin={coin}  player={player} setCoin={setCoin}></Card>
        })}
      </div>
    </div>
  );
};

export default AvailabalePlayers;