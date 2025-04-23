import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            <h1>Navbar</h1>
          </div>
          <div class="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Contact</a></li>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar