import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onDeleteCounter={this.handleDeleteCounter}
          >
            <h4>Counter #{c.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
  handleDeleteCounter = (id) => {
    return this.setState({
      counters: this.state.counters.filter((c) => c.id !== id),
    });
  };
}

export default Counters;
