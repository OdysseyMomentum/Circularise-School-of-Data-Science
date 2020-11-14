import React from "react";
import "./styles.css";

import Batch from "./Batch";

export default class ListOfBatch extends React.Component {
  render() {
    return (
      <ul className="listings">
        {Object.keys(this.props.mockData).map((key) => (
          <Batch
            updateTotalKg={this.props.updateTotalKg}
            updateTotalPrice={this.props.updateTotalPrice}
            updateTotalScore={this.props.updateTotalScore}
            mockData={this.props.mockData}
            key={key}
            properties={this.props.mockData[key]["properties"]}
          />
        ))}
      </ul>
    );
  }
}
