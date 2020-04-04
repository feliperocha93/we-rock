import React, { Component } from "react";

import "./styles.css";

export default class Banner extends Component {
  render() {
    return (
      <section
        className="banner"
        style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
      >
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </section>
    );
  }
}
