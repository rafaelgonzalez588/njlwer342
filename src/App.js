import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  state = {
    text: [],
    inputValue: '',
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((previous) => {
      return { ...previous, inputValue: "", text: [ ...previous.text, previous.inputValue ] }
    })
  }
  handleChange = (e) => {
    let valor = e.target.value;
    this.setState((previous) => {
      return { ...previous, inputValue: valor }
    })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.text.map((value, index) => {
              return <li key={index}>{value}</li>
            })}
          </ul>
           <form onSubmit={this.handleSubmit} >
             <input type="text" 
             onChange={this.handleChange} 
             id="new-task" 
             placeholder="Ingresa una tarea y oprime Enter" 
             value={this.state.inputValue}/>
           </form>
        </div>
      </div>
    )
  }
}


export default App;
