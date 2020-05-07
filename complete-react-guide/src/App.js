import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: "Max", age: 28},
      {name: "Joe", age: 18}
    ]
  });

  const switchNameHandler = () => {
    setPersonState({persons: [
      {name: "Maxwell", age: 28},
      {name: "Joe", age: 18}
    ]});
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, React!</p>
        <button onClick={switchNameHandler}>Click Me!</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      </header>
    </div>
  )
}

export default App;
