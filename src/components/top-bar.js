import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleView, switchTheme } from "../actions/index";

class TopBar extends Component {
  render() {
    return (
      <div className="d-flex flex-md-row align-items-center p-3 px-md-4 mb-3 top-bar border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-bold">Herolo Weather App</h5>
        <ul className="nav nav-pills ml-auto">
          <li className="nav-item">
            <button
              href="#"
              className={`nav-item nav-link p-2 font-weight-bold ${
                this.props.currentView === 0 ? "active" : ""
              }`}
              onClick={() => {
                if (this.props.currentView === 0) return;
                this.props.dispatch(toggleView(0));
              }}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              href="#"
              className={`nav-item nav-link p-2 font-weight-bold ${
                this.props.currentView === 1 ? "active" : ""
              }`}
              onClick={() => {
                if (this.props.currentView === 1) return;
                this.props.dispatch(toggleView(1));
              }}
            >
              Favorites
            </button>
          </li>
          <li className="pl-2">
            <div className="custom-control custom-switch pt-2">
              <input
                type="checkbox"
                defaultChecked={this.props.lightTheme}
                onChange={(e) => {
                  this.props.dispatch(switchTheme(e.target.checked));
                }}
                className="custom-control-input my-switch"
              />
              <label className="custom-control-label">Light Theme</label>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TopBar);
