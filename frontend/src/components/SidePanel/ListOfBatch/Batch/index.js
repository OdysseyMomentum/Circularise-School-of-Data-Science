import React from "react";
import "./styles.css";
import CTA from "../../../shared/CTA";
import Slider from "../../../shared/Slider";

export default class Batch extends React.Component {
  state = {
    isSelected: false,
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
        <div className="item__inner">
          <div className="item__left">
            <div className="weight">
              Weight: {this.props.feature.properties.weight}kg
            </div>
            <div className="sdg-container">
              <span>TOP3 SDG: </span>
              {this.props.feature.properties.SDG.map((val, i) => (
                <div key={i} className="sdg" data-value={val}>
                  {val}
                </div>
              ))}
            </div>
          </div>
          <div className="item__right">
            <div className="price">
              Total price: ${this.props.feature.properties.price}
            </div>
          </div>
        </div>
        <div className="score-container">
          <div className="score">
            Current WP Score: {this.props.feature.properties.score}
          </div>
          <p>Add Boost: </p>
          <Slider
            defaultValue={this.props.feature.properties.score}
            minValue={this.props.feature.properties.score}
            maxValue={this.props.feature.properties.scoreMax}
          />
        </div>
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
