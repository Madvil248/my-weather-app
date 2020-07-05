import React from "react";
import { getWeekDayNameByDate } from "../services/common";

const DayCard = (props) => {
  return (
    <div className="col-xl-2 mb-2">
      <div className="card mx-1 shadow-sm">
        <div className="card-body px-1">
          <h5 className="card-title">
            {getWeekDayNameByDate(props.data.Date)}
          </h5>
          {_minMaxTemp(props.data.Temperature)}
        </div>
      </div>
    </div>
  );
};

function _minMaxTemp(temp) {
  return (
    <p className="card-text col">
      <span className="px-1">{temp.Minimum.Value}&deg;</span>
      <span className="px-1">-</span>
      <span className="px-1">{temp.Maximum.Value}&deg;</span>
    </p>
  );
}

export default DayCard;
