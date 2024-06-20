import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { TabTitle } from '../../utils/GeneralFunctions'

const Home = () => {

  TabTitle("Menuk Fernando - Web Developer")

  return (
    <>
      <div className='hero'>
        <div className="hero-content">
          <h1>Menuk Fernando</h1>
          <h1><span>FrontEnd Developer</span></h1>
          <p>Web Developer, Graphic Designer and ML Enthusiast</p>
          <div className='buttons'>
            <Link to={'/contact'}><button>Contact Me</button></Link>
            <button>Resume</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home