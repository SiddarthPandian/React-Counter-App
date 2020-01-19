import React, { Component } from "react";

class Counter extends Component {
  render() {
    // Same as React.createElement. Thats why we imported react
    return (
      <div>
        <span className="ml-4">Item #{this.props.counter.id}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    // we want to keep the render method less bloated
    // badge m-2 is the bootstrap button
    // badge warning is yellow and badge primary is blue
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
