import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// stateful component: manages state (using useState hook or class-based approach)
// smart/container component
// does not use render () 
// const app = props => {
//   const [ this.state, setState ] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   });

class App extends Component {
  state = {
    persons: [
      { id: 'aeffe', name: 'Max', age: 28 },
      { id: 'fefef', name: 'Manu', age: 29 },
      { id: 'gnngr', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // older way -> const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // older way: const persons = this.state.persons.slice();
    // es6 vvv more modern
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    // inline style to scope the style (apply to single element), but restrictions
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1x solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    let persons = null;
    let btnClass = '';
    
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary> key={person.id}
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
            </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;

      // style.backgroundColor = 'red';
      // Radium
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      // For radium<StyleRoot></StyleRoot>
      <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </div>
    );
  }
}

export default App;

  