import React from 'react'
import Navigation from '../Components/Navigation'
import { CopyToClipboard as Copy } from 'react-copy-to-clipboard'

export default function Contact() {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>

        <div className="contactBox">
          <h1>Contact me</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Quatre Bornes</span>
            </li>

            <li>
              <i className="fas fa-mobile-alt"></i>
              <Copy text="54768014">
                <span
                  onClick={() =>
                    alert('Telephone number copied to clipboard !')
                  }
                  className="clickInput"
                >
                  54 76 80 14
                </span>
              </Copy>
            </li>

            <li>
              <i className="far fa-envelope"></i>
              <Copy text="f.lineup@gmail.com">
                <span
                  onClick={() => alert('Email address copied to clipboard !')}
                  className="clickInput"
                >
                  F.lineup@gmail.com
                </span>
              </Copy>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/fidy-nirina-mickaël-randriamananjara-6bab94144"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://www.facebook.com/nirina.nickce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>facebook</h4>
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="https://github.com/Nickce1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Google</h4>
              <i className="fab fa-google"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}
