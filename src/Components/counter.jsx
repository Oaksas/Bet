import React, { Component } from "react";
class Counter extends Component {
  formatCount() {
    return this.props.counter.value == 0 ? "Zero" : this.props.counter.value;
  }

  render() {
    return (
      <div>
        <span className={this.getStyle()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary  m-4"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getStyle() {
    return this.props.counter.value === 0
      ? "text-warning display-6"
      : "text-primary display-6";
  }
}

export default Counter;
