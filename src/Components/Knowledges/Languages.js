import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Javascript', xp: 2 },
      { id: 2, value: 'CSS', xp: 1 },
      { id: 3, value: 'C#', xp: 1.5 },
      { id: 4, value: 'jQuery', xp: 1 },
    ],
    frameworks: [
      { id: 1, value: 'Bootstrap', xp: 2 },
      { id: 2, value: 'React', xp: 1 },
      { id: 3, value: 'Sass', xp: 2 },
      { id: 4, value: 'React-bootstrap', xp: 0.4 },
    ],
  }
  render() {
    let { languages, frameworks } = this.state

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />

        <ProgressBar
          languages={frameworks}
          title="Frameworks and Libraries"
          className="frameworksDisplay"
        />
      </div>
    )
  }
}
