import React from "react";
import "./styles.css";
import Slider from "../../../shared/Slider";
import Recap from "./recap";
import CTAConfetti from "./cta-confetti";

export default class Batch extends React.Component {
  state = {
    isSelected: false,
    finalBoostedPrice: this.props.feature.properties.price,
    finalBoostedScore: this.props.feature.properties.score,
    isButtonDisabled: false,
  };

  updatePrice = (score) => {
    // not necessarily added yet
    const price = Math.round(score * 1.02);
    this.setState({ finalBoostedPrice: price });
  };

  updateScore = (score) => {
    // not necessarily added yet
    this.setState({ finalBoostedScore: score });
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
        ? -this.state.finalBoostedPrice
        : this.state.finalBoostedPrice
    );
    this.props.updateTotalScore(
      this.state.isSelected
        ? -this.state.finalBoostedScore
        : this.state.finalBoostedScore
    );

    this.setState({ isSelected: !this.state.isSelected });
    if (!this.state.isSelected) {
      this.setState({ isButtonDisabled: true });
      setTimeout(() => this.setState({ isButtonDisabled: false }), 1500);
    }
  };

  render() {
    return (
      <li className={`item ${this.state.isSelected ? "item--selected" : ""}`}>
        <div className="title" onClick={() => this.selectPreview()}>
          {this.props.feature.properties.name}
        </div>
        <div className="weight">
          Weight: {this.props.feature.properties.weight}kg
        </div>
        <div className="slider-container" disabled={this.state.isSelected}>
          <Slider
            updatePrice={this.updatePrice}
            updateScore={this.updateScore}
            defaultValue={this.props.feature.properties.score}
            minValue={this.props.feature.properties.score}
            maxValue={this.props.feature.properties.scoreMax}
          />
        </div>
        <Recap
          isSelected={this.state.isSelected}
          finalBoostedPrice={this.state.finalBoostedPrice}
          finalBoostedScore={this.state.finalBoostedScore}
        />
        <CTAConfetti
          isButtonDisabled={this.state.isButtonDisabled}
          isSelected={this.state.isSelected}
          selectAdd={this.selectAdd}
        />
      </li>
    );
  }
}
