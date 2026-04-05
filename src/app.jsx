import { Suspense } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Navbar/Players/Players";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<div>Loading...</div>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
};

export default App;
