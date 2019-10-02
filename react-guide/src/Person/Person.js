import React from 'react';
// import Radium from 'radium';
import './Person.css';

// ES6 function syntax
// a stateless component, no internal state management
// have as many presentational/dumb components as possible 

const person = (props) => {
    // For radium
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;