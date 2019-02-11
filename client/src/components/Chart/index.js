import React from "react";
var Chart = require("chart.js");

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "pie", //==bar==line==radar==polararea==doughnut==
      data: {
        labels: ["Bills", "Gas", "Food", "Other"],
        datasets: [
          {
            label: "Total money spent",
            data: [12, 19, 3, 40],
            backgroundColor: [
              "rgba(255, 99, 132)",
              "rgba(54, 162, 235)",
              "rgba(255, 206, 86)",
              "rgba(255, 206, 205)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}

export default Layout;