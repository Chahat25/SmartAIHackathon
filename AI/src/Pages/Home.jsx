
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import Products from "../Components/Products"
import { AnimatedTestimonialsDemo } from "../Components/Testimonials"

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
<Hero />
<Products category="Men" />
<AnimatedTestimonialsDemo />
    </div>
  )
}

export default Home
