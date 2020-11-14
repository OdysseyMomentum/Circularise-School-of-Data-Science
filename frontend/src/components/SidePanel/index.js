import React from "react";
import "./styles.css";

import Filters from "./Filters";
import ListOfBatch from "./ListOfBatch";
import Total from "./Total";

export default class SidePanel extends React.Component {
  render() {
    return (
      <div className="side-panel">
        <h1>Our batch locations</h1>
        <Filters />
        <ListOfBatch mockData={this.props.mockData} />
        <Total />
      </div>
    );
  }
}
