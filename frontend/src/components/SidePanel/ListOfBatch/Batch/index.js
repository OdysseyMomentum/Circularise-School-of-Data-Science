import React from "react";
import "./styles.css";

export default class Batch extends React.Component {
  state = {
    isSelected: false,
  };

  selectBatch = (properties) => {
    // this.props.flyToStore();
    this.props.updateTotalKg(
      this.state.isSelected ? -properties.weight : properties.weight
    );
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <li
        className={`item ${this.state.isSelected ? "item--selected" : ""}`}
        onClick={() => this.selectBatch(this.props.properties)}
      >
        <p className="title">{this.props.properties.name}</p>
        <p>Weight: {this.props.properties.weight}</p>
      </li>
    );
  }
}
