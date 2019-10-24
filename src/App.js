import React, { Component } from "react";
import "./App.css";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople = async () => {
    const response = await fetch("https://swapi.co/api/people");
    const data = await response.json();
    data.results.forEach(async user => {
      const planetName = await this.findPlanet(user.homeworld);
      this.setState({
        people: [
          ...this.state.people,
          { url: user.url, name: user.name, homeworld: planetName }
        ]
      });
    });
  };

  findPlanet = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data.name;
  };

  render() {
    const { people } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars App</h1>
        </header>
        <main>
          <CardList people={people} />
        </main>
      </div>
    );
  }
}

export default App;
