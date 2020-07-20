import React, { Component } from "react";
import "./App.css";
import "./styles/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";
import { getWeather } from "./api/main";
import { setCity } from "./redux/actions/index";
import { SELECTED } from "./services/response";

import Weather from "./components/main/weather";
import Favorites from "./components/favorites";
import Autocomplete from "./components/common/autocomplete";
import TopBar from "./components/top-bar";

const TEL_AVIV_KEY = 215854;

class App extends Component {
  componentDidMount() {
    // this.props.dispatch(setCity(Object.assign({}, SELECTED, ACCU_FORECAST)));
    getWeather(TEL_AVIV_KEY).then((forecast) => {
      this.props.dispatch(setCity(Object.assign({}, SELECTED, forecast)));
    });
  }

  render() {
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
