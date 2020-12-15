import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../images/JC.png'
import './styles/Navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo"></img>
          <span className="font-weight-light">Primera web</span>
          <span className="font-weight-bold">React</span>
        </Link>
        </div>
      </div>
      )
  }
}



export default Navbar