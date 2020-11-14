import React from "react";
import "./styles.css";

export default class Batch extends React.Component {
  render() {
    return (
      <div className="batch">
        <p>Adress: {this.props.properties.address}</p>
      </div>
    );
  }
}
