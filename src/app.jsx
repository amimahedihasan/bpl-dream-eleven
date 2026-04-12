import { Suspense, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Navbar/Players/Players";
import Footer from "./Components/Footer/Footer"; 
const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const playersPromise = fetchPlayers();

  const [coin, setCoin] = useState(900000000);


  const handleFreeCredit = () => {
    setCoin(coin + 6000000); 
  };

  return (
    <>
      <Navbar coin={coin}></Navbar>
    
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Players setCoin={setCoin} coin={coin} playersPromise={playersPromise}></Players>
      </Suspense>

     
      <Footer></Footer>
    </>
  );
};

export default App;