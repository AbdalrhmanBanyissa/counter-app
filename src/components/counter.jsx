import React from "react";

const Counter = ({ counter, onDeleteCounter, onIncrement, onDecrement }) => {
  const getBadgeFormat = () => {
    let badgeClass = "badge m-2 bg-";
    return (badgeClass += counter.value === 0 ? "warning" : "primary");
  };

  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  return (
    <div className="row">
      {/* {children} */}
      <div className="col-1">
        <span
          style={{ color: counter.value > 0 ? "white" : "black" }}
          className={getBadgeFormat()}
        >
          {formatCount()}
        </span>
      </div>
      <div className="col">
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
          disabled={counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          onClick={() => onDeleteCounter(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Counter;
