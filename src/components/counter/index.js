import { Component } from "react";

import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

import "./main.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.step = 1;
  }

  handleDecrement = () => {
    if (this.state.count > -50 && this.state.count - this.step >= -50) {
      this.setState({
        count: this.state.count - this.step,
      });
    }
  };

  handleIncrement = () => {
    if (this.state.count < 50 && this.state.count + this.step <= 50) {
      this.setState({
        count: this.state.count + this.step,
      });
    }
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  handleMinimumValue = () => {
    this.setState({
      count: -50,
    });
  };

  handleMaximumValue = () => {
    this.setState({
      count: 50,
    });
  };

  handleStep = (e) => {
    if (e.target.value) {
      this.step = +e.target.value;
    } else {
      this.step = 1;
    }
  };

  render() {
    const {
      state: { count },
    } = this;
    return (
      <>
        <div className="stepInput">
          <label htmlFor="goToStep"> The Number of Steps : </label>
          <input
            onChange={this.handleStep}
            type="text"
            placeholder="steps"
            id="goToStep"
          />
        </div>
        <div className="counterContainer">
          <img onClick={this.handleDecrement} src={minus} alt="minus-sign" />
          <div>{count}</div>
          <img onClick={this.handleIncrement} src={plus} alt="plus-sign" />
        </div>
        <div className="additionalButtons">
          <button onClick={this.handleMinimumValue}>Minimum value</button>
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleMaximumValue}>Maximum value</button>
        </div>
      </>
    );
  }
}

export default Counter;
