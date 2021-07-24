/* eslint-disable import/prefer-default-export */
import { auth, createUserProfileDocument, signInWithGoogle } from '../../firebase/firebase';
import Alert from '../../tools/Alert/Alert';
import ActionTypes from '../action-types/users.action-types';

export const createUser = (userData) => async (dispatch) => {
  dispatch({
    type: ActionTypes.SIGN_UP_START,
    payload: userData,
  });

  try {
    const { email, password, username } = userData;
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    await createUserProfileDocument(user, { username });

    dispatch({
      type: ActionTypes.SIGN_UP_SUCCESS,
      payload: { email, username },
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.SIGN_UP_FAILURE,
      payload: error.message,
    });

    Alert({
      type: 'error',
      message: error.message,
    });
  }
};

export const signInUser =
  ({ email, password, isGoogleSignIn }) =>
  async (dispatch) => {
    if (isGoogleSignIn) {
      dispatch({
        type: ActionTypes.GOOGLE_SIGNIN_START,
      });

      try {
        const { user } = await signInWithGoogle();

        dispatch({
          type: ActionTypes.SIGNIN_SUCCESS,
          payload: {
            user,
          },
        });
      } catch (error) {
        dispatch({
          type: ActionTypes.SIGNIN_FAILURE,
          payload: error.message,
        });
        Alert({ type: 'error', message: error.message });
      }

      // if email and password signin
    } else {
      dispatch({
        type: ActionTypes.EMAIL_SIGNIN_START,
      });

      try {
        const { user } = await auth.signInWithEmailAndPassword(email, password);

        dispatch({
          type: ActionTypes.SIGNIN_SUCCESS,
          payload: {
            user,
          },
        });
      } catch (error) {
        dispatch({
          type: ActionTypes.SIGNIN_FAILURE,
          payload: error.message,
        });
        Alert({ type: 'error', message: error.message });
      }
    }
  };
