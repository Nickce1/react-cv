import React from 'react'
import Navigation from '../Components/Navigation'

export default function Home() {
  return (
    <div className="home">
      <Navigation />

      <div className="homeContent">
        <div className="content">
          <h1>RANDRIAMANANANJARA</h1>
          <h1>Fidy Nirina Mickaël</h1>
          <h2>Front-End Developer</h2>
          <div className="pdf">
            <a href="../Media/bigGates.jpg" target="_blanck">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
