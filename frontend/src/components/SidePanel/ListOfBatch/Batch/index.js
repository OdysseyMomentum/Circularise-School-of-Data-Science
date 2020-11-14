import React from "react";
import "./styles.css";

export default class Batch extends React.Component {
  state = {
    isSelected: false,
  };

  selectBatch = () => {
    this.props.callFlyToMarker(this.props.feature);
    this.props.updateTotalKg(
      this.state.isSelected
        ? -this.props.feature.properties.weight
        : this.props.feature.properties.weight
    );
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <li
        className={`item ${this.state.isSelected ? "item--selected" : ""}`}
        onClick={() => this.selectBatch()}
      >
        <p className="title">{this.props.feature.properties.name}</p>
        <p>Weight: {this.props.feature.properties.weight}</p>
      </li>
    );
  }
}
