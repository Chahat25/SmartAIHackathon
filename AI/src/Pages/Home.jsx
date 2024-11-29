import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Products from "../Components/Products"
import VerticalImageLoop from "../Components/VerticalImageLoop"


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <VerticalImageLoop />
      <Products />
    </div>
  )
}

export default Home
