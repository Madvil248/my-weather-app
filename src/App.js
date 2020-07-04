import React, { Component } from "react";
import "./App.css";
import "./styles/theme.css";
import Weather from "./components/weather";
import Favorites from "./components/favorites";
import Autocomplete from "./components/autocomplete";
import TopBar from "./components/top-bar";
import "weather-icons/css/weather-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";

class App extends Component {
  render() {
    if (this.props.coords) {
      console.log(this.props.coords);
    }
    return (
      <div
        className={
          "pb-3 " + `${this.props.lightTheme ? "light-theme" : "dark-theme"}`
        }
      >
        <TopBar />
        <Autocomplete />
        {this.props.currentView == 0 ? <Weather /> : <Favorites />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
