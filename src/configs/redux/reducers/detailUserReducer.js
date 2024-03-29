import { ActionTypes } from "../constants/action-types";
const initialState = {
   user: {
    name: "",
    username: "",
    email: "",
  },
  isLoading: false,
};
const detailUser = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default detailUser;

const initial = {
  users: [],
  isLoading: false,
};

export const UpdateUserReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_USER:
      return { ...state, users: payload.data.data };
    default:
      return state;
  }
};

// import {
//   GET_DETAIL_USER_FAILED,
//   GET_DETAIL_USER_PENDING,
//   GET_DETAIL_USER_SUCCESS,
// } from "../actions/type";

// const initialState = {
//   isLoading: false,
//   isError: false,
//   data: [],
// };

// const detailUser = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_DETAIL_USER_PENDING:
//       return { ...state, isLoading: true };
//     case GET_DETAIL_USER_SUCCESS:
//       return { ...state, isLoading: false, data: action.payload.data };
//     case GET_DETAIL_USER_FAILED:
//       return { ...state, isLoading: false, isError: true };
//     default:
//       return state;
//   }
// };

// export default detailUser;
