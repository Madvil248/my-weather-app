import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocationAutocomplete, getWeather } from "../../api/main";
import { setCity } from "../../redux/actions/index";
import "../../styles/autocomplete.css";

export class Autocomplete extends Component {
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
  };

  getAutocomplete(searchValue) {
    getLocationAutocomplete(searchValue).then((filteredOptions) => {
      this.setState({ filteredOptions });
    });
  }

  setSelectedCity(selectedCity) {
    getWeather(selectedCity.Key).then((forecast) => {
      this.props.dispatch(setCity(Object.assign({}, selectedCity, forecast)));
    });
  }

  onChange = (e) => {
    const userInput = e.currentTarget.value;

    if (userInput.trim().length < 2) {
      this.setState({
        userInput: e.currentTarget.value,
      });
      return;
    }
    this.setState({
      activeOption: 0,
      showOptions: true,
      userInput: e.currentTarget.value,
    });
    this.getAutocomplete(e.currentTarget.value);
  };

  onClick = (e) => {
    const newArray = this.state.filteredOptions.filter((obj) => {
      return obj.Key === e.currentTarget.id;
    });
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
      selectedCity: newArray[0],
    });
    this.setSelectedCity(newArray[0]);
  };

  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      const userInputVal = `${filteredOptions[activeOption].LocalizedName}, ${filteredOptions[activeOption].Country.LocalizedName}`;
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: userInputVal,
        selectedCity: filteredOptions[activeOption],
      });
      this.setSelectedCity(filteredOptions[activeOption]);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput },
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="autocomplete-items">
            {filteredOptions.map((option, index) => {
              let className;
              if (index === activeOption) {
                className = "autocomplete-active";
              }
              return (
                <li
                  id={option.Key}
                  key={option.Key}
                  onClick={onClick}
                  className={className}
                >
                  {option.LocalizedName},{option.Country.LocalizedName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="autocomplete-items">
            <p>No Option!</p>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="form-inline position-relative w-50 mx-auto">
          <input
            type="text"
            placeholder="Search City Weather"
            className="form-control w-75 shadow-none"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />

          <button type="submit" className="btn btn-primary w-25">
            Search
          </button>

          {optionList}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Autocomplete);
