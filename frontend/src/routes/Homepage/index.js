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
    name: "Adrien Rahier",
    height: "190",
  };

  render() {
    return (
      <div className="homepage">
        <SidePanel />
        <Map />
        <UserPanel />
      </div>
    );
  }
}

export default Homepage;
