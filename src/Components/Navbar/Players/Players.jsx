import { use } from "react";
import AvailabalePlayers from "../../AvalabalePlayers/AvailabalePlayers";

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  return (
    <div>
      <AvailabalePlayers players={players}></AvailabalePlayers>
    </div>
  );
};

export default Players;
