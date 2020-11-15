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
        <p>
          Total volume: <b>{this.props.totalKg}kg</b>
        </p>
        <p>
          WP Score: <b>{this.props.totalScore}</b>
        </p>
        <p>
          Price: <b>${this.props.totalPrice}</b>
        </p>
        <CTA
          buttonColor="green"
          text={`Buy now`}
          onClick={() => this.buyNow()}
        />
      </div>
    );
  }
}
