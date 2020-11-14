import React from "react";
import "./styles.css";

import Batch from "./Batch";

export default class ListOfBatch extends React.Component {
  render() {
    return (
      <div className="list-batch">
        {Object.keys(this.props.mockData).map((key) => (
          <Batch
            key={key}
            properties={this.props.mockData[key]["properties"]}
          />
        ))}
      </div>
    );
  }
}
