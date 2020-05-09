import React, { Component } from 'react';
import Radium from 'radium';
import './Person.css';

class Person extends Component {
    render() {
        return (
            <div className="Person">
                <p onClick={this.props.click}>I am {this.props.name} and {this.props.age} years old.</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;
