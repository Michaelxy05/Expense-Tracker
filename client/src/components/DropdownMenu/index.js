import React, { Component } from "react";
import "./style.css";

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'student loan'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
          <label>
            <i class="fas fa-list-ul"></i>Catagory 
            <br></br> 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="bills">Bills</option>
              <option value="gas">Gas</option>
              <option value="food">Food</option>
              <option value="other">Other...</option>
            </select>
          </label>
      );
    }
  }
  export default Dropdown;