import React from "react";

const Counter = ({ counter, onDeleteCounter, onIncrement }) => {
  const getBadgeFormat = () => {
    let badgeClass = "badge m-2 bg-";
    return (badgeClass += counter.value === 0 ? "warning" : "primary");
  };

  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  return (
    <div>
      {/* {children} */}
      <span
        style={{ color: counter.value > 0 ? "white" : "black" }}
        className={getBadgeFormat()}
      >
        {formatCount()}
      </span>
      <button
        onClick={() => onIncrement(counter)}
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
};

export default Counter;
