import UserActionTypes from '../action-types/users.action-types';

const initialState = {
  currentUser: null,
  authUserError: null,
  authUserLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        authUserLoading: true,
      };

    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        authUserLoading: false,
        authUserError: null,
        currentUser: action.payload,
      };

    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        authUserLoading: false,
        authUserError: action.payload,
      };

    case UserActionTypes.GOOGLE_SIGNIN_START:
      return {
        ...state,
        authUserLoading: true,
      };

    case UserActionTypes.EMAIL_SIGNIN_START:
      return {
        ...state,
        authUserLoading: true,
      };

    case UserActionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        authUserLoading: false,
        authUserError: null,
        currentUser: action.payload,
      };

    case UserActionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        authUserLoading: false,
        authUserError: action.payload,
      };

    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        authUserLoading: true,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        authUserLoading: false,
        authUserError: null,
        currentUser: null,
      };

    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        authUserLoading: false,
        authUserError: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
