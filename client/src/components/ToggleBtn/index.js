import React, { Component } from "react";
import "./style.css";

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRadio: 'public'
    };
  }

  handleRadioChange = (event) => {
    this.setState({
      selectedRadio: event.currentTarget.value
    })
  };

  render() {
    return (
      <div className="radio-row">
        <div className="input-row">
          <input
            type="radio"
            name="paidWith"
            value="cash"
            checked={this.state.selectedRadio === 'cash'}
            onChange={this.handleRadioChange}
          />
          <label htmlFor="cash">Cash <i class="fas fa-money-bill-alt"></i></label>
        </div>
        <div className="input-row">
          <input
            type="radio"
            name="paidWith"
            value="card"
            checked={this.state.selectedRadio === 'card'}
            onChange={this.handleRadioChange}
          />
          <label htmlFor="card">Card <i class="fas fa-credit-card"></i></label>
        </div>
      </div>
    )
  }
}
export default Radio;