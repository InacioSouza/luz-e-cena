import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import MovieSection from "./components/MovieSection/MovieSection"


function App() {

  return (
    <>
      <Header/>
      <Banner src="./images/banner.png" alt="Banner"/>
      <MovieSection/>
    </>
  )
}

export default App
