import React, { Component } from "react";
import "./styles.css";
export default class calculator extends Component {
  state = {
    count: 0
  };
  add = () => {
    let { count } = this.state;
    this.setState({
      count: count === 10 ? (count = 10) : count + 1
    });
  };

  remove = () => {
    let { count } = this.state;
    if (count > 0) {
      this.setState({
        count: count - 1
      });
    }
  };
  render() {
    let { count } = this.state;
    let { add, remove } = this;
    return (
      <div className="container">
        <h1>React Counter App</h1>
        <div className="counter">
          <button onClick={add}> + </button>
          <h2>{count}</h2>
          <button onClick={remove}> - </button>
        </div>
      </div>
    );
  }
}
