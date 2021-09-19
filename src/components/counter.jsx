import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.counter.value,
    };
  }

  render() {
    const { counter, children, onDeleteCounter } = this.props;
    return (
      <div>
        {children}
        <span
          style={{ color: this.state.count > 0 ? "white" : "black" }}
          className={this.getBadgeFormat()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDeleteCounter(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeFormat = () => {
    let badgeClass = "badge m-2 bg-";
    return (badgeClass += this.state.count === 0 ? "warning" : "primary");
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
