import ReposActionTypes from '../action-types/repos.action-types';

const initialState = {
  allRepos: null,
  reposError: null,
  reposLoading: false,
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReposActionTypes.FETCHING_REPOS_START:
      return {
        ...state,
        reposLoading: true,
      };

    case ReposActionTypes.FETCHING_REPOS_SUCCESS:
      return {
        ...state,
        reposLoading: false,
        reposError: null,
        allRepos: action.payload,
      };

    case ReposActionTypes.FETCHING_REPOS_FAILURE:
      return {
        ...state,
        reposLoading: false,
        reposError: action.payload,
      };

    default:
      return state;
  }
};

export default reposReducer;
