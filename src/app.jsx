import { Suspense } from 'react'
import './app.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Players from './assets/Components/Navbar/Players/Players'
import Banner from './assets/HomePage/Banner/Banner'

const fetchPlayers = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

export function App() {

  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
      }> <Players playersPromise={playersPromise}></Players></Suspense>



    </>
  )
}
