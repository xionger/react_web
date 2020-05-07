import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and {props.age} years old.</p>
        </div>
    )
}

export default person;
