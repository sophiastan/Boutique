import React from 'react';
import './Person.css';

// ES6 function syntax
// a stateless component, no internal state management
// have as many presentational/dumb components as possible 

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;