import React from "react";
import "./styles.css";
import CTA from "../../shared/CTA";

export default class Total extends React.Component {
  buyNow = () => {
    console.log("buy");
  };
  render() {
    return (
      <div className="total">
        <p>Total volume: {this.props.totalKg}kg</p>
        <p>WP Score: {this.props.totalScore}</p>
        <p>Price: ${this.props.totalPrice}</p>
        <CTA
          buttonColor="green"
          text={`Buy now`}
          onClick={() => this.buyNow()}
        />
      </div>
    );
  }
}
