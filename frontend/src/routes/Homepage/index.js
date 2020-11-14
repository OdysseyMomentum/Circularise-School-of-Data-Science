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

  state = {
    mockData: "",
  };

  setData = (mockData) => {
    this.setState({ mockData });
  };

  render() {
    return (
      <div className="homepage">
        <SidePanel mockData={this.state.mockData} />
        <Map setData={this.setData} />
        <UserPanel />
      </div>
    );
  }
}

export default Homepage;
