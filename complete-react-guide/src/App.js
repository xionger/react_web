import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, React!</p>
        <Person name="Max" age="28" />
        <Person name="Joe" age="18" />
        <Person name="Mike" age="38" />
      </header>
    </div>
  );
}

export default App;
