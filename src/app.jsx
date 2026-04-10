import { Suspense, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Navbar/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const playersPromise = fetchPlayers();
  const [coin,setCoin] =useState(600)

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>
      }>
        <Players setCoin={setCoin} coin={coin} playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
};

export default App;
