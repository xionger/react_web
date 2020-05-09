import React from 'react';
import Radium from 'radium';
import './Cockpit.css';

const cockpit = (props) => {
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

    if (props.showPersons){
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'pink',
          color: 'black'
        }
    }

    let classes = [];
    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div>
            <p>Hello, React!</p>
            <p className={classes.join(' ')}>This is a dynamic class.</p>
            <button 
                style={style} 
                onClick={props.toggle}>
                    Toggle Persons.
            </button>
        </div>
    );
}

export default Radium(cockpit);