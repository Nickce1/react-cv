import React from 'react'

export default function Hobbies() {
  return (
    <div className="hobbies">
      <h3>Interests</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span> Basket</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span> Hiking</span>
        </li>
        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span> Gaming</span>
        </li>
        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span> Space</span>
        </li>
        <li className="hobby">
          <i className="fas fa-book-reader"></i>
          <span> Learning</span>
        </li>
      </ul>
    </div>
  )
}
