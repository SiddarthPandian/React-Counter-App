import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-4">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReset={onReset}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
