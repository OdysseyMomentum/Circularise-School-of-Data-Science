import React from "react";
import "./styles.css";
import CTA from "../../../shared/CTA";

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
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <li className={`item ${this.state.isSelected ? "item--selected" : ""}`}>
        <p className="title">{this.props.feature.properties.name}</p>
        <p>Weight: {this.props.feature.properties.weight}</p>
        <CTA
          buttonColor="blue"
          text={"See on map"}
          onClick={() => this.selectPreview()}
        />
        <CTA
          text={`${this.state.isSelected ? "Remove from" : "Add to"} cart`}
          onClick={() => this.selectAdd()}
        />
      </li>
    );
  }
}
