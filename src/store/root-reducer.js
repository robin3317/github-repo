import { combineReducers } from 'redux';
import reposReducer from './reducers/repos.reducers';
import userReducer from './reducers/users.reducers';

const rootReducer = combineReducers({
  user: userReducer,
  repos: reposReducer,
});

export default rootReducer;
