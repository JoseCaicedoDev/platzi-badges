import React from 'react'
//import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import './styles/BadgeNew.css'
import logo from '../images/JC.png'


class BadgeNew extends React.Component {
  state = {form:{
    firstName: '',
    lastName: '',
    description: '',
    redes: '',
    email: '',
  }}

  handleChange = (e) => {
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }

  render() {
    return (
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={logo} alt="logo"></img>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge firstName={this.state.form.firstName}
            lastName={this.state.form.lastName}
            description={this.state.form.description}
            redes={this.state.form.redes} 
            email={this.state.form.email}
            avatarURL="https://s.gravatar.com/avatar/cc1972e508fae75bdcba7e711595bb56?s=80"></Badge>
          </div>
          <div className="col-6">
            <BadgeForm onChange={this.handleChange} 
            formValues={this.state.form}></BadgeForm>
          </div>
        </div>
      </div>
    </React.Fragment>
      )
  }
}



export default BadgeNew