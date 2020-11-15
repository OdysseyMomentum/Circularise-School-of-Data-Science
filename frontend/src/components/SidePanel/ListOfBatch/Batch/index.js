import React from "react";
import "./styles.css";
import CTA from "../../../shared/CTA";
import Slider from "../../../shared/Slider";
import Confetti from "react-dom-confetti";

export default class Batch extends React.Component {
  state = {
    isSelected: false,
    price: this.props.feature.properties.price,
    isButtonDisabled: false,
  };

  updatePrice = (score) => {
    const price = Math.round(score * 1.02);
    this.setState({ price });
  };

  selectPreview = () => {
    this.props.callFlyToMarker(this.props.feature);
  };

  selectAdd = () => {
    this.props.updateTotalKg(
      this.state.isSelected
        ? -this.props.feature.properties.weight
        : this.props.feature.properties.weight
    );
    this.props.updateTotalPrice(
      this.state.isSelected
        ? -this.props.feature.properties.price
        : this.props.feature.properties.price
    );
    this.props.updateTotalScore(
      this.state.isSelected
        ? -this.props.feature.properties.score
        : this.props.feature.properties.score
    );

    this.setState({ isSelected: !this.state.isSelected });
    if (!this.state.isSelected) {
      this.setState({ isButtonDisabled: true });
      setTimeout(() => this.setState({ isButtonDisabled: false }), 2000);
    }
  };

  render() {
    const config = {
      angle: "101",
      spread: "23",
      startVelocity: 40,
      elementCount: 70,
      dragFriction: 0.12,
      duration: 1000,
      stagger: 3,
      width: "10px",
      height: "10px",
      perspective: "500px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    };
    return (
      <li className={`item ${this.state.isSelected ? "item--selected" : ""}`}>
        <div className="title" onClick={() => this.selectPreview()}>
          {this.props.feature.properties.name}
        </div>
        <div className="weight">
          Weight: {this.props.feature.properties.weight}kg
        </div>
        <Slider
          updatePrice={this.updatePrice}
          defaultValue={this.props.feature.properties.score}
          minValue={this.props.feature.properties.score}
          maxValue={this.props.feature.properties.scoreMax}
        />
        <div className="price">Total price: ${this.state.price}</div>
        <div className="cta-container">
          <button
            disabled={this.state.isButtonDisabled}
            className="cta"
            onClick={() => this.selectAdd()}
          >
            {this.state.isSelected ? "Remove from" : "Add to"} cart
            <Confetti
              active={this.state.isSelected}
              config={this.props.confettiConfig}
            />
          </button>
        </div>
      </li>
    );
  }
}
