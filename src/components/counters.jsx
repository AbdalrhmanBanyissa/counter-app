import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onDeleteCounter, onReset, onIncrement }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((c) => (
        <Counter
          key={c.id}
          counter={c}
          onDeleteCounter={onDeleteCounter}
          onIncrement={onIncrement}
        />
        //   <h4>Counter #{c.id}</h4>
        // </Counter>
      ))}
    </div>
  );
};

export default Counters;
