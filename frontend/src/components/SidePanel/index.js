import React from "react";
import "./styles.css";

import Filters from "./Filters";
import ListOfBatch from "./ListOfBatch";
import Total from "./Total";

export default class SidePanel extends React.Component {
  render() {
    return (
      <div className="side-panel">
        <Filters />
        <ListOfBatch
          updateTotalKg={this.props.updateTotalKg}
          updateTotalPrice={this.props.updateTotalPrice}
          updateTotalScore={this.props.updateTotalScore}
          callFlyToMarker={this.props.callFlyToMarker}
          mockData={this.props.mockData}
        />
        <Total
          totalKg={this.props.totalKg}
          totalPrice={this.props.totalPrice}
          totalScore={this.props.totalScore}
        />
      </div>
    );
  }
}
