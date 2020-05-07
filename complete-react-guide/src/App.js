import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Joe", age: 18}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      {name: "Maxwell", age: 28},
      {name: "Joe", age: 18}
    ]});
  }
  
  render(){
      return (
        <div className="App">
          <header className="App-header">
            <p>Hello, React!</p>
            <button onClick={this.switchNameHandler}>Click Me!</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          </header>
        </div>
      )
    }
}

export default App;
