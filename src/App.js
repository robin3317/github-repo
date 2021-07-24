import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase';
import HomePage from './pages/Home/Home';
import RegistrationPage from './pages/Registration/Registration';
import { setCurrentUser } from './store/actions/users.actions';

const App = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(user));
  }, [dispatch, user]);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (currentUser ? <Redirect to="/home" /> : <RegistrationPage />)}
      />
      <Route exact path="/home" render={() => (currentUser ? <HomePage /> : <Redirect to="/" />)} />
    </Switch>
  );
};

export default App;
