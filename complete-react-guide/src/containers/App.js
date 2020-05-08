import React, {Component} from 'react';
import Radium, { StyleRoot}  from 'radium';
import './App.css';
import Person from '../components/Persons/Person/Person';

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
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
            <p>Hello, React!</p>
            <p className={classes.join(' ')}>This is a dynamic class.</p>
            <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons!</button>
            { persons }
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
