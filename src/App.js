import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    teams: null
  }
  componentDidMount(){
    fetch('http://localhost:4000/teams?hello=world')
      .then(response => response.json())
      // .then(teams => console.log('TEAMS:', teams))
      .then(teams => this.setState({ teams }))
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          { this.state.teams && this.state.teams.map(team => <h1>{team.name}</h1>)}
        </header>
      </div>
    );
  }
}

export default App;
