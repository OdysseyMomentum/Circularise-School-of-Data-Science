import React from "react";
import RangeSlider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import PropTypes from "prop-types";
import "./styles.css";

export default class Slider extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
  };

  state = {
    value: this.props.defaultValue,
  };

  handleChange = (value) => {
    this.setState({ value });
    this.props.updatePrice(value);
  };

  handleChangeComplete = () => {
    // this.props.updatePrice(this.props.sliderType, this.state.value);
  };

  render() {
    const DEFAULT = {
      MIN: 0,
      MAX: 100,
    };
    const { value } = this.state;
    return (
      <div className="slider-container">
        <div className="value value--left">
          WP Score: {this.props.minValue} (base)
        </div>
        <RangeSlider
          min={this.props.minValue || DEFAULT.MIN}
          max={this.props.maxValue || DEFAULT.MAX}
          value={value}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className="value value--right">{value} (boosted)</div>
      </div>
    );
  }
}
