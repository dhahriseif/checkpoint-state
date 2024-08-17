import "./App.css";
import React, { Component } from "react";
import Profile from "./components/Profile";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      bol: false
    }
  }
  render() {
    return(
    <div>
      <button
        onClick={() => {
          this.setState({ bol: !this.state.bol });
        }}
      >
        {" "}
        afficher{" "}
        </button>
    {this.state.bol && <Profile />}
    </div>
  )}
}
