import React from 'react'

class BadgeForm extends React.Component {
  /* Inicializacion del estado */
  //state = {}
  /* Cambios en el input */
/*   handleChange = (e) =>{
    console.log({value: e.target.value,
      name: e.target.name})
    this.setState({
      [e.target.name]: e.target.value
    })
  } */
  /* Accion en el boton */
  handleClick = (e) =>{
    console.log('Diste click')
  }
  /* Submit en el formulario */
  handleSubmit = (e) =>{
    e.preventDefault()
    console.log('Se Envio el form')
  }

  render() {
    return (
      <div>
        <h1>Nuevo registro</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Primer Nombre</label>
            <input onChange={this.props.onChange} 
            className="form-control" 
            type="text" name="firstName"
            value={this.props.formValues.firstName}></input>
          </div>
          <div className="form-group">
            <label>Primer Apellido</label>
            <input onChange={this.props.onChange} 
            className="form-control" 
            type="text" name="lastName"
            value={this.props.formValues.lastName}></input>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input onChange={this.props.onChange} 
            className="form-control" 
            type="email" name="email"
            value={this.props.formValues.email}></input>
          </div>
          <div className="form-group">
            <label>Titulo de Trabajo</label>
            <input onChange={this.props.onChange} 
            className="form-control" 
            type="text" name="description"
            value={this.props.formValues.description}></input>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.props.onChange} 
            className="form-control" 
            type="text" name="redes"
            value={this.props.formValues.redes}></input>
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
        </form>
      </div>
    )
  }
}


export default BadgeForm