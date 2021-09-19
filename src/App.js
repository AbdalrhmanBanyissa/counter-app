import React, { Component } from "react";
import Counters from "./components/counters";
class App extends Component {
  render() {
    return (
      <div className="col-lg-8 p-3 py-md-2">
        <Counters />
      </div>
    );
  }
}

export default App;
