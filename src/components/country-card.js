import React from "react";
import Svgs from "../styles/svgs";
import { connect } from "react-redux";
import { toggleFavorite } from "../actions/index";
import { toggleFav } from "../config/main";

const CountryCard = (props) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <p className="card-text">{props.data.LocalizedName}</p>
        <p className="card-text">{props.data.Country.LocalizedName}</p>
        <a
          href="#"
          onClick={() => {
            props.dispatch(
              toggleFavorite(toggleFav(props.favorites, props.data))
            );
          }}
        >
          <Svgs size="3em" icon="heart-full" />
        </a>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(CountryCard);
