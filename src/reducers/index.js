import * as types from "../actions/actionTypes";
import { SELECTED } from "../services/response";

var initialState = {
  currentView: 0,
  selected: SELECTED,
  favorites: [],
  lightTheme: true,
  isFav: false,
  latitude: 0,
  longitude: 0,
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_VIEW:
      return Object.assign({}, state, {
        currentView: action.currentView,
      });
    case types.TOGGLE_FAVORITE:
      return Object.assign({}, state, {
        favorites: action.data,
        isFav:
          action.data.filter((e) => e.Key === state.selected.Key).length >
          0,
      });
    case types.SET_CITY:
      return Object.assign({}, state, {
        selected: action.selected,
        isFav:
          state.favorites.filter((e) => e.Key === action.selected.Key).length >
          0,
        currentView: 0,
      });
    case types.SET_THEME:
      return Object.assign({}, state, {
        lightTheme: action.checked,
      });
    case types.SET_LAT_LNG:
      return Object.assign({}, state, {
        latitude: action.lat,
        longitude: action.lng,
      });
    default:
      return state;
  }
}
