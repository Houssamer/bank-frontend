import './App.css';
import Account from './screens/Account/Account';
import Home from './screens/Home/Home';
import LoginScreen from './screens/Login/Login';
import NotFound from './screens/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Confirmation from './screens/Confirmation/Confirmation';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { useEffect } from 'react';
import axios from './axios/axios';
import { useDispatch } from 'react-redux';
import { Login, Logout } from './features/userSlice';




function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };

      const body = JSON.stringify({
        email: localStorage.getItem('email'),
      });

      axios
        .post('/api/client', body, config)
        .then((res) => {
          dispatch(
            Login({
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              accounts: res.data.accounts,
              email: res.data.username,
            })
          );
        })
        .catch((err) => {
          dispatch(Logout());
        });
    }
  }, []);

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
              <LoginScreen />
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
