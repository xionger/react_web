import React, {Component} from 'react';
import Radium, { StyleRoot}  from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.changeNameHandler} />
      );
    }

    return (
      <StyleRoot>
        <div className="App">
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons} 
            toggle={this.togglePersonsHandler}  />
          {persons}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
