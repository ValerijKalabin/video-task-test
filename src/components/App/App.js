import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Seek from '../Seek/Seek';
import Favourit from '../Favourit/Favourit';
import user from '../../data/user.json';

function App() {
  const [isGuest, setIsGuest] = React.useState(!localStorage.getItem(user.username));

  function handleSubmitFormLogin({ username, password }) {
    if(user.username === username && user.password === password) {
      localStorage.setItem(username, username);
      setIsGuest(false);
    } else {
      alert('Неправильный логин или пароль');
    }
  }

  function hadleClickExit() {
    localStorage.removeItem(user.username);
    setIsGuest(true);
  }

  return (
    <div className={`app ${isGuest && 'app__guest'}`}>
      <Switch>
        <Route exact path="/">
          {
            !isGuest ?
            <Redirect to="/search" /> :
            <Login onSubmitFormLogin={handleSubmitFormLogin} />
          }
        </Route>
        <Route path="/search">
          {
            isGuest ?
            <Redirect to="/" /> :
            <>
              <Header onClickExit={hadleClickExit} />
              <Seek />
            </>
          }
        </Route>
        <Route path="/favourites">
          {
            isGuest ?
            <Redirect to="/" /> :
            <>
              <Header onClickExit={hadleClickExit} />
              <Favourit />
            </>
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
