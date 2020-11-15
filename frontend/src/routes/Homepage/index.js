import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

import SidePanel from "../../components/SidePanel";
import Map from "../../components/Map";
import UserPanel from "../../components/UserPanel";

import { withWindowDimensions } from "../../helpers";

class Homepage extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    mockData: "",
    totalKg: 0,
    totalPrice: 0,
    totalScore: 0,
  };

  updateTotalKg = (updateKg) => {
    this.setState({ totalKg: this.state.totalKg + updateKg });
  };
  updateTotalPrice = (updatePrice) => {
    this.setState({ totalPrice: this.state.totalPrice + updatePrice });
  };
  updateTotalScore = (updateScore) => {
    this.setState({ totalScore: this.state.totalScore + updateScore });
  };

  setData = (mockData) => {
    this.setState({ mockData });
  };

  callFlyToMarker = (currentFeature) => {
    this.child.current.flyToMarker(currentFeature);
  };

  render() {
    return (
      <div
        className="homepage"
        style={{
          height: `${this.props.windowHeight}px`,
        }}
      >
        <SidePanel
          callFlyToMarker={this.callFlyToMarker}
          mockData={this.state.mockData}
          totalKg={this.state.totalKg}
          totalPrice={this.state.totalPrice}
          totalScore={this.state.totalScore}
          updateTotalKg={this.updateTotalKg}
          updateTotalPrice={this.updateTotalPrice}
          updateTotalScore={this.updateTotalScore}
        />
        <Map ref={this.child} setData={this.setData} />
        <UserPanel />
      </div>
    );
  }
}

export default withWindowDimensions(Homepage);
