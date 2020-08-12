import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>PAGE NOT FOUND !!</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span> Home</span>
        </NavLink>
      </div>
    </div>
  )
}
