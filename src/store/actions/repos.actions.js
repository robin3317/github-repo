import ReposActionTypes from '../action-types/repos.action-types';

export const fetchingReposStart = () => ({
  type: ReposActionTypes.FETCHING_REPOS_START,
});

export const fetchingReposSuccess = (repos) => ({
  type: ReposActionTypes.FETCHING_REPOS_SUCCESS,
  payload: repos,
});

export const fetchingReposError = (error) => ({
  type: ReposActionTypes.FETCHING_REPOS_FAILURE,
  payload: error,
});
