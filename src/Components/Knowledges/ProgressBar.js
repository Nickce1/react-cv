import React from 'react'

export default function ProgressBar({ languages, className, title }) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="years">
        <span>Experience durations</span>
        <span>1 an</span>
        <span>2 ans</span>
      </div>

      <div>
        {languages.map((item) => {
          let xpYears = 2.12
          let progressBar = (item.xp / xpYears) * 100 + '%'

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div
                className="progressBar"
                style={{
                  width: progressBar,
                }}
              ></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
