import React from "react";

const CountryCard = (props) => {
  const forecast = props.data.DailyForecasts[0];
  return (
    <div className="card mb-4 shadow-sm country-card" onClick={props.onClick}>
      <div className="card-body">
        <h3 className="card-text">{props.data.LocalizedName}</h3>
        <p className="card-text">{forecast.Day.IconPhrase}</p>
        <p className="card-text">{forecast.Temperature.Maximum.Value}&deg;</p>
      </div>
    </div>
  );
};

export default CountryCard;
