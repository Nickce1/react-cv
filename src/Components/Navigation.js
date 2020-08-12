import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  const profilePicStyle = {
    width: '150px',
  }
  return (
    <div className="sidebar">
      <div id="identity">
        <div className="indentity-content">
          <img
            src="./media/photo.jpg"
            alt="profile-pic"
            style={profilePicStyle}
          />
          <h4>RANDRIAMANANJARA</h4>
          <h4>Fidy Nirina Mickaël</h4>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Knowledges</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-image"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetWork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/fidy-nirina-mickaël-randriamananjara-6bab94144"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/nirina.nickce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Nickce1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-google"></i>
            </a>
          </li>
        </ul>

        <div className="signature">
          <p>Lineup CV - 2020</p>
        </div>
      </div>
    </div>
  )
}
