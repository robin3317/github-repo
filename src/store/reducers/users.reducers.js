import UserActionTypes from '../action-types/users.action-types';

const initialState = {
  currentUser: null,
  createUserError: null,
  createUserLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        createUserLoading: true,
      };

    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        createUserLoading: false,
        currentUser: action.payload,
      };

    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        createUserLoading: false,
        createUserError: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
