import './App.css';
import Account from './screens/Account/Account';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import NotFound from './screens/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
