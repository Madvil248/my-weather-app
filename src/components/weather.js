import React, { Component } from "react";
import DayCard from "./day-card";
import Svgs from "../styles/svgs";
import { connect } from "react-redux";
import { toggleFavorite } from "../actions/index";
import { toggleFav } from "../config/main";

class Weather extends Component {
  render() {
    const props = this.props;
    const city = props.selected.LocalizedName;
    const country = props.selected.Country.LocalizedName;
    return (
      <div className="container mt-3 px-0">
        <div className="card py-3 px-4 justify-content-md-center">
          <div className="d-flex flex-column flex-md-row align-items-top">
            <div className="mr-md-auto">
              <h1>{`${city}, ${country}`}</h1>
              <h5 className="py-2">
                <i className="wi wi-day-sunny display-1"></i>
              </h5>
              <h4 className="py-3">
                {props.forecast.DailyForecasts
                  ? props.forecast.DailyForecasts[0].Day.IconPhrase
                  : ""}
              </h4>
            </div>
            <div className="center-block mb-5">
              <a
                href="#"
                onClick={() => {
                  props.dispatch(
                    toggleFavorite(toggleFav(props.favorites, props.selected))
                  );
                }}
              >
                <Svgs size="3em" icon={props.newFav ? "heart-full" : "heart"} />
              </a>
            </div>
          </div>
          {props.forecast
            ? this._dailyCards(props.forecast.DailyForecasts)
            : ""}
        </div>
      </div>
    );
  }

  _dailyCards(forecast) {
    return (
      <div className="card-deck mb-3 text-center row justify-content-center">
        {forecast.map((data) => {
          return <DayCard key={data.EpochDate} data={data} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Weather);
