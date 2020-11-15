import React from "react";
import "./styles.css";
import Confetti from "react-dom-confetti";

export default class CTAConfetti extends React.Component {
  render() {
    return (
      <div className="cta-container">
        <button
          disabled={this.props.isButtonDisabled}
          className="cta"
          onClick={() => this.props.selectAdd()}
        >
          {this.props.isSelected ? "Remove from" : "Add to"} cart
          <Confetti active={this.props.isSelected} />
        </button>
      </div>
    );
  }
}
