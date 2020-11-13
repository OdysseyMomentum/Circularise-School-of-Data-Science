import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import CTA from "../../components/CTA";

export default class Share extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
  };

  openFacebookPopup = () => {
    window.open(
      "https://www.facebook.com/sharer.php?u=http://adrierahier.work/",
      "_blank",
      "width=400,height=500"
    );
  };

  goToHome = () => {
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    return (
      <div className="share">
        <Header />
        <p>
          Name: {this.props.location.state[0].name}, Height:{" "}
          {this.props.location.state[0].height}
        </p>
        <CTA
          text="Post on facebook"
          type="button"
          onClick={this.openFacebookPopup}
          buttonSize="medium"
          buttonColor="blue"
        />
        <CTA
          text="Go back home"
          type="button"
          onClick={this.goToHome}
          buttonSize="large"
          buttonColor="orange"
        />
      </div>
    );
  }
}
