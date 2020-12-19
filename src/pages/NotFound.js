import React from 'react'
import logoError from '../images/notError.png'

import '../components/styles/NotFound.css'

function NotFound(){
  return (
    <React.Fragment>
      <div className="notFound__hero">
        <figure className="figure">
          <img className="figure-img img-fluid" src={logoError} alt="Error 404"></img>
        </figure>
      </div>
    </React.Fragment>
  )
}

export default NotFound