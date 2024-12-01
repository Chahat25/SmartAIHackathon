import React from 'react'
import Products from '../Components/Products'
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import MenProd from '../Components/Products_man'

function ProductPage() {
  return (
    <div>
              <Navbar />
              <Header />
      <Products />
      <MenProd />
    </div>
  )
}
export default ProductPage
