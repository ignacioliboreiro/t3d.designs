import React from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import { Product } from '../Product/Product'

const Home = () => {
  return (
    <div className='divHome'>
      <NavBar />
      <Product />
    </div>
  )
}

export default Home
