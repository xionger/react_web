import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asgsgd', name: "Max", age: 28},
      {id: 'dsg', name: "Manu", age: 29},
      {id: 'ety', name: "Joe", age: 18}
    ],
    showPersons: false
  };

  changeNameHandler = (e, id) => {
    const personIdx = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    const person = {...this.state.persons[personIdx]};
    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIdx] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (idx) => {
    const persons = [...this.state.persons];
    persons.splice(idx, 1);
    this.setState({persons: persons});
  }

  render(){
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return (
                <Person 
                  key={person.id}
                  name={person.name} 
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={e => this.changeNameHandler(e, person.id)} />
              );
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
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
