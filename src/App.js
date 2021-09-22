import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/nav";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    const { counters } = this.state;
    if (counters.length === 0)
      return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <h1 className="navbar-brand">
            There are no counters in the data base
          </h1>
        </nav>
      );
    return (
      <div>
        <NavBar counters={counters} />
        <Counters
          counters={counters}
          onDeleteCounter={this.handleDeleteCounter}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
  handleDeleteCounter = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
}

export default App;
