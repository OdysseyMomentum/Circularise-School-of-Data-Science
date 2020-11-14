import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

import SidePanel from "../../components/SidePanel";
import Map from "../../components/Map";
import UserPanel from "../../components/UserPanel";

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
  };

  setData = (mockData) => {
    this.setState({ mockData });
  };

  callFlyToMarker = (currentFeature) => {
    this.child.current.flyToMarker(currentFeature);
  };

  render() {
    return (
      <div className="homepage">
        <SidePanel
          callFlyToMarker={this.callFlyToMarker}
          mockData={this.state.mockData}
        />
        <Map ref={this.child} setData={this.setData} />
        <UserPanel />
      </div>
    );
  }
}

export default Homepage;
