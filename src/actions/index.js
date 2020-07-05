import * as types from "./actionTypes";

export const toggleFavorite = (data) => ({
  type: types.TOGGLE_FAVORITE,
  data,
});

export const toggleView = (currentView) => ({
  type: types.TOGGLE_VIEW,
  currentView,
});

export const setCity = (selected) => ({
  type: types.SET_CITY,
  selected,
});

export const switchTheme = (checked) => ({
  type: types.SET_THEME,
  checked,
});

export const setLatLng = (lat, lng) => ({
  type: types.SET_THEME,
  lat,
  lng,
});
