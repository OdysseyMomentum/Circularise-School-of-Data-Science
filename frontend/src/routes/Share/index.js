import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import SidePanel from "../../components/SidePanel";
import Map from "../../components/Map";
import UserPanel from "../../components/UserPanel";

class Share extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  state = {
    name: "Adrien Rahier",
    height: "190",
  };

  render() {
    return <div className="share">This is the share page</div>;
  }
}

export default Share;
