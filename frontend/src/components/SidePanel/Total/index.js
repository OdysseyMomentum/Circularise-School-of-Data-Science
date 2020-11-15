import React from "react";
import "./styles.css";

export default class Total extends React.Component {
  render() {
    return (
      <div className="total">
        <p>Total volume: {this.props.totalKg}kg</p>
        <p>WP Score: {this.props.totalScore}</p>
        <p>Price: ${this.props.totalPrice}</p>
      </div>
    );
  }
}
