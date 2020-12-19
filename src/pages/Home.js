import React from 'react'

import {Link} from 'react-router-dom'

import './styles/Home.css'
import logo from '../images/JC.png'

function Home(){
  return(
    <React.Fragment>
      <div className="Home__hero">
        <div className="container Home__container">
          <div className="col-6">
            <img className="img-fluid" src={logo} alt="logo"></img>
          </div>
          <div className="col-6">
            <h2>Bienvenidos</h2>
            <p>Sitio de aprendizaje</p>
            <Link to="/badges" className="btn btn-primary">Ver ahora</Link>
          </div>

        </div>
      </div>

    </React.Fragment>
  )
}

export default Home