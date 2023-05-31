import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const sessionName = sessionStorage.getItem("name")

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://mopharma.com/images/patient-management-app-01.png" alt="Logo" width="45" height="45" className="d-inline-block align-text-top" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Patient</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view">View Patient</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Settings
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Logout</Link></li>
              </ul>
            </li>

          </ul>
        </div>
        <div style={{ color: 'blue', alignItems:'center', alignContent:'center'}}> <h6>Welcome {sessionName}</h6></div>
      </div>
    </nav>
  )
}

export default NavBar
