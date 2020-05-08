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

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map(person => {
              return (
                  <Person name={person.name} age={Person.age} />
              );
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
          <p>Hello, React!</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons!</button>
          { persons }
      </div>
    )
  }
}

export default App;
