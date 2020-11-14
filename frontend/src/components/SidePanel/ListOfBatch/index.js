import React from "react";
import "./styles.css";

import Batch from "./Batch";

export default class ListOfBatch extends React.Component {
  render() {
    return (
      <div className="side-panel">
        <Batch />
        <Batch />
        <Batch />
      </div>
    );
  }
}
