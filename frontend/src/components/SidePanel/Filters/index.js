import React from "react";
import "./styles.css";

export default class Filters extends React.Component {
  render() {
    return (
      <div className="filters">
        <h1>Our batch locations</h1>
        <b>Filters:</b>
        <div className="filter-container">
          <label htmlFor="score">WP minimum score:</label>
          <input
            type="number"
            id="score"
            name="score"
            placeholder="125"
            min="100"
            max="600"
          />
        </div>
        <div className="filter-container filter-container--price">
          <label htmlFor="price">Maximum price:</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="6000"
            min="4000"
            max="10000"
          />
        </div>
      </div>
    );
  }
}
