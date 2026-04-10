import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import MovieSection from "./components/MovieSection/MovieSection"
import Newsletter from "./components/Newsletter/Newsletter"


function App() {

  return (
    <>
      <Header/>
      <Banner src="./images/banner.png" alt="Banner"/>
      <MovieSection/>
      <Banner src="./images/combo.png" alt="Combo"/>
      <Newsletter/>
    </>
  )
}

export default App
