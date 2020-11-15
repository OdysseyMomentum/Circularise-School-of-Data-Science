import React from "react";
import "./styles.css";

import Filters from "./Filters";
import ListOfBatch from "./ListOfBatch";
import Total from "./Total";

export default class SidePanel extends React.Component {
  state = {
    totalKg: 0,
    totalPrice: 0,
    totalScore: 0,
  };
  updateTotalKg = (updateKg) => {
    this.setState({ totalKg: this.state.totalKg + updateKg });
  };
  updateTotalPrice = (updatePrice) => {
    this.setState({ totalPrice: this.state.totalPrice + updatePrice });
  };
  updateTotalScore = (updateScore) => {
    this.setState({ totalScore: this.state.totalScore + updateScore });
  };
  render() {
    return (
      <div className="side-panel">
        <Filters />
        <ListOfBatch
          updateTotalKg={this.updateTotalKg}
          updateTotalPrice={this.updateTotalPrice}
          updateTotalScore={this.updateTotalScore}
          callFlyToMarker={this.props.callFlyToMarker}
          mockData={this.props.mockData}
        />
        <Total
          totalKg={this.state.totalKg}
          totalPrice={this.state.totalPrice}
          totalScore={this.state.totalScore}
        />
      </div>
    );
  }
}
