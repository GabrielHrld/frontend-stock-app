//Leemos del localStorage si hay usuario y lo seteamos
const dataUser = JSON.parse(localStorage.getItem('user'));

export const initialState = {
  user: dataUser != null ? dataUser : {},
  stocks: [],
  fetching: false,
};
