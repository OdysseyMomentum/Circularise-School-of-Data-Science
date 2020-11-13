import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./styles.css";

export default class CTA extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    buttonSize: PropTypes.string,
    buttonColor: PropTypes.string,
  };
  render() {
    const DEFAULT = {
      SIZE: "medium",
      COLOR: "orange",
    };
    const btnClass = cx("CTA", {
      [`CTA--${this.props.buttonSize || DEFAULT.SIZE}`]: true,
      [`CTA--${this.props.buttonColor || DEFAULT.COLOR}`]: true,
    });
    return (
      <button
        type={this.props.type}
        onClick={this.props.onClick}
        className={btnClass}
      >
        {this.props.text}
      </button>
    );
  }
}
