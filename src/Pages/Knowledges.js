import React from 'react'
import Navigation from '../Components/Navigation'
import Languages from '../Components/Knowledges/Languages'
import Experience from '../Components/Knowledges/Experience'
import OtherSkills from '../Components/Knowledges/OtherSkills'
import Hobbies from '../Components/Knowledges/Hobbies'

export default function Knowledges() {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  )
}
