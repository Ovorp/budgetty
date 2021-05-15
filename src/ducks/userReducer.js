import axios from 'axios';

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export const requestUserData = () => {
  let data = axios
    .get('/auth/user-data')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err, 'this is an err'));

  return {
    type: REQUEST_USER_DATA,
    payload: data,
  };
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case `${REQUEST_USER_DATA}_FULFILLED`:
      return {
        ...state,
        firstName: payload.user.firstName,
        lastName: payload.user.lastName,
        email: payload.user.email,
      };
    default:
      return state;
  }
};

export default reducer;
