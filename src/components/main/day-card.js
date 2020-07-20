import React from "react";
import { getWeekDayNameByDate } from "../services/common";

const DayCard = (props) => {
  const temperature = props.data.Temperature.Maximum.Value;
  return (
    <div className="col-xl-2 mb-2">
      <div className="card mx-1 shadow-sm">
        <div className="card-body px-1">
          <h5 className="card-title">
            {getWeekDayNameByDate(props.data.Date)}
          </h5>
          <span className="px-1">{temperature}&deg;</span>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
