import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import CTA from "../CTA";

export default class Form extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    updateInputs: PropTypes.func,
    name: PropTypes.string,
    height: PropTypes.string,
  };

  // goToResults = (event) => {
  //   event.preventDefault();
  //   this.props.history.push({
  //     pathname: "/result",
  //     state: [this.props.inputs],
  //   });
  // };

  state = {
    name: this.props.name,
    height: this.props.height,
  };

  handleChangeComplete = (event) => {
    event.preventDefault();
    this.props.updateInputs({
      name: this.state.name,
      height: this.state.height,
    });
  };

  updateInputValue(evt) {
    let test = {};
    test[evt.target.id] = evt.target.value;
    this.setState(test);
  }

  render() {
    return (
      <form onSubmit={this.handleChangeComplete}>
        <p className="description">Change these properties</p>
        <div className="row">
          <div>
            <label htmlFor="name">New Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={(evt) => this.updateInputValue(evt)}
              required
            />
          </div>
          <div>
            <label htmlFor="height">New Height:</label>
            <input
              type="text"
              id="height"
              name="height"
              value={this.state.height}
              onChange={(evt) => this.updateInputValue(evt)}
              required
            />
          </div>
        </div>
        <CTA
          text="Update"
          type="submit"
          buttonSize="large"
          buttonColor="orange"
        />
      </form>
    );
  }
}
