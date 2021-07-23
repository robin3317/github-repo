import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import RegistrationPage from './pages/Registration/Registration';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={RegistrationPage} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  );
}

export default App;
