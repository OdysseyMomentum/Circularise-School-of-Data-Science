import React from "react";
import "./styles.css";
import CTA from "../../../shared/CTA";
import Slider from "../../../shared/Slider";

export default class Batch extends React.Component {
  state = {
    isSelected: false,
    price: this.props.feature.properties.price,
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
        <Slider
          updatePrice={this.updatePrice}
          defaultValue={this.props.feature.properties.score}
          minValue={this.props.feature.properties.score}
          maxValue={this.props.feature.properties.scoreMax}
        />
        <div className="price">Total price: ${this.state.price}</div>
        <div className="cta-container">
          <CTA
            text={`${this.state.isSelected ? "Remove from" : "Add to"} cart`}
            onClick={() => this.selectAdd()}
          />
        </div>
      </li>
    );
  }
}
