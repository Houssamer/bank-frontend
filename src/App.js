import './App.css';
import Account from './screens/Account/Account';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import NotFound from './screens/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Confirmation from './screens/Confirmation/Confirmation';

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <Router>
          {user ? (
            <Switch>
              <Route path="/account">
                <Account />
              </Route>
              <Route component={NotFound} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/email/confirmation">
                <Confirmation />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route component={NotFound} />
            </Switch>
          )}
  
      </Router>
    </div>
  );
}

export default App;
