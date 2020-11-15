import React from "react";
import "./styles.css";

export default class Recap extends React.Component {
  render() {
    return (
      <>
        {!this.props.isSelected && (
          <div className="recap">
            <span>Total price: ${this.props.finalBoostedPrice}</span>
            <span>Total WP Score: {this.props.finalBoostedScore}</span>
          </div>
        )}
        {this.props.isSelected && (
          <div className="recap">
            <span>
              Total price: <b>${this.props.finalBoostedPrice}</b>
            </span>
            <span>
              Total WP Score: <b>{this.props.finalBoostedScore}</b>
            </span>
          </div>
        )}
      </>
    );
  }
}
