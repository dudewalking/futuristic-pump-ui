import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="Pump" />
        <Body />
        <Footer />
      </div>
    );
  }
}
