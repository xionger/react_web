import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Joe", age: 18}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 28},
      {name: "Manu", age: 29},
      {name: "Joe", age: 18}
    ]});
  }

  changeNameHandler = (e) => {
    this.setState({persons: [
      {name: "Max", age: 28},
      {name: e.target.value, age: 29},
      {name: "Joe", age: 16}
    ]});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cusor: 'pointer'
    }

    return (
      <div className="App">
          <p>Hello, React!</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons!</button>
          {
            this.state.showPersons ?  
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, "Maximillian")}
                changed={this.changeNameHandler} />
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> : null
          }
      </div>
    )
  }
}

export default App;
