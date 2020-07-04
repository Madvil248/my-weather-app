import React, { Component } from "react";
import CountryCard from "./country-card";
import { connect } from "react-redux";

class Favorites extends Component {
  render() {
    return (
      <div className="container mt-3 px-0">
        <div className="card py-3 px-4 justify-content-md-center">
          <div className="card-deck mb-3 text-center">
            {this.props.favorites.length > 0
              ? this.props.favorites.map((data) => {
                  return <CountryCard data={data} key={data.Key} />;
                })
              : this._emptyList()}
          </div>
        </div>
      </div>
    );
  }
  _emptyList() {
    return (
      <div className="card py-3 px-4 justify-content-md-center">
        <p className="text-size-big">No Favorites Here</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Favorites);
