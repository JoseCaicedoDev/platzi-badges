import React from 'react'
import './styles/Badge.css'
import logo from '../images/JC.png'

class Badge extends React.Component {
  render() {
    return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={logo} alt="Logo"></img>
      </div>
      <div className="Badge__section-name">
        <img className="Badge__avatar" src={this.props.avatarURL} alt="badge"></img>
        <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
      </div>
      <div className="Badge__section-info">
        <h3>
          {this.props.description}
        </h3>
        <div>
          @{this.props.redes}
        </div>
      </div>
      <div className="Badge__footer">
          #Vamoscontoda
      </div>

    </div>
      )
  }
}

export default Badge