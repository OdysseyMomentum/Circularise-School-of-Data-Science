import React from "react";
import "./styles.css";

export default class Batch extends React.Component {
  render() {
    return (
      <li className="item">
        <p className="title">{this.props.properties.name}</p>
        <p>Address: {this.props.properties.address}</p>
      </li>
    );
  }
}
