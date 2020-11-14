// Automatically calculate the Width / Height of the class component it wraps
// See: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

import React, { Component } from "react";

export function withWindowDimensions(WrappedComponent) {
  return class extends Component {
    state = { width: 0, height: 0 };

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    render() {
      return (
        <WrappedComponent
          {...this.props}
          windowWidth={this.state.width}
          windowHeight={this.state.height}
        />
      );
    }
  };
}
