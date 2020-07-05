import React, { Component } from "react";
import "./App.css";
import "./styles/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { getWeather } from "./config/main";
import { setCity } from "./actions/index";
import { SELECTED } from "./services/response";

import Weather from "./components/weather";
import Favorites from "./components/favorites";
import Autocomplete from "./components/autocomplete";
import TopBar from "./components/top-bar";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(setCity(SELECTED));
    // getWeather(215854).then((forecast) => {
    //   this.props.dispatch(setCity(Object.assign({}, selectedCity, forecast)));
    // });
  }

  render() {
    if (this.props.coords) {
      console.log(this.props.coords);
    }
    const themeClass = `pb-3 ${
      this.props.lightTheme ? "light-theme" : "dark-theme"
    }`;
    return (
      <div className={themeClass}>
        <TopBar />
        <Autocomplete />
        {this.props.currentView === 0 ? <Weather /> : <Favorites />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
