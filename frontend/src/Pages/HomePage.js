import React from 'react'
import '../style.css'
import Navbar from '../Components/Navbar';
import logo from  "../Resources/logoo.png";

function HomePage() {
  return (
    <div className="home">
        < Navbar/>
      <div className="main">
        <div className="main-center">
          <h1>Welcome to </h1>
          <div>
              <img src={logo} alt="Description of the image" width="400" height="200" ></img>
          </div>
          <p>ConnectHub: Your centralized platform for seamless networking, fostering meaningful .<br /> connections and collaborations effortlessly.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage