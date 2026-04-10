import { use, useState } from "react";
import AvailabalePlayers from "../../AvalabalePlayers/AvailabalePlayers";

const Players = ({ playersPromise }) => {
  const players = use(playersPromise);
  const [selectedType ,setSelectedType] = useState("available")
  console.log(selectedType)






  return (

    <div className=" container mx-auto my-[60px] ">

      <div className="flex justify-between gap-4 items-center " >
        <h2 className='font-bold text-3xl'>Available Players</h2>

        <div className="">

          <button
          onClick={()=>setSelectedType("available")}
          className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""} rounded-r-none rounded-l-xl btn `}>Available</button>

          <button
          onClick={()=>setSelectedType("seleted")}
           className={`btn ${selectedType === "seleted" ? "bg-[#E7FE29]" : ""} rounded-l-none rounded-r-xl btn `}>Seleted</button>

        
        </div>
      </div>








      <AvailabalePlayers players={players}></AvailabalePlayers>
    </div>
  );
};

export default Players;
