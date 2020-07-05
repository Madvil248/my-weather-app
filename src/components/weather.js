import React, { Component } from "react";
import DayCard from "./day-card";
import Svgs from "../styles/svgs";
import { connect } from "react-redux";
import { toggleFavorite } from "../actions/index";
import { toggleFav } from "../config/main";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav:
        this.props.favorites.filter((e) => this.props.selected.Key === e.Key)
          .length > 0,
    };
  }
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
              <h4 className="py-3">
                {props.selected.DailyForecasts
                  ? props.selected.DailyForecasts[0].Day.IconPhrase
                  : ""}
              </h4>
            </div>
            <div className="center-block mb-5">
              <button
                className="custom-button"
                onClick={() => {
                  this.setState({ isFav: !this.state.isFav });
                  props.dispatch(
                    toggleFavorite(
                      toggleFav(
                        props.favorites,
                        Object.assign({}, props.selected, props.forecast)
                      )
                    )
                  );
                }}
              >
                <Svgs
                  size="3em"
                  icon={this.state.isFav ? "heart-full" : "heart"}
                />
              </button>
            </div>
          </div>
          {props.selected.DailyForecasts
            ? this._dailyCards(props.selected.DailyForecasts)
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
