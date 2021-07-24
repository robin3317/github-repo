/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import Alert from '../../tools/Alert/Alert';
import ReposActionTypes from '../action-types/repos.action-types';

export const fetchRepos = (queryParams) => async (dispatch) => {
  dispatch({
    type: ReposActionTypes.FETCHING_REPOS_START,
  });

  try {
    const { query } = queryParams;
    const githubEndpoint = `https://api.github.com/search/repositories?q=${query}&sort=stars&per_page=65`;

    const { data } = await axios.get(githubEndpoint);
    console.log(data);

    dispatch({
      type: ReposActionTypes.FETCHING_REPOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ReposActionTypes.FETCHING_REPOS_FAILURE,
      payload: error.message,
    });

    Alert({
      type: 'error',
      message: error.message,
    });
  }
};
