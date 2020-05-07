import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Joe", age: 18}
    ]
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

  render(){   
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello, React!</p>
          <button onClick={()=>this.switchNameHandler("Maxwell")}>Click Me!</button>
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
        </header>
      </div>
    )
  }
}

export default App;
