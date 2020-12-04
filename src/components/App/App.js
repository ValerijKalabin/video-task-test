import './App.css';
import React from 'react';
import Login from '../Login/Login';
import Header from '../Header/Header';
import user from '../../data/user.json';

function App() {
  const [isGuest, setIsGuest] = React.useState(!localStorage.getItem(user.username));

  function handleSubmitFormLogin({ username, password }) {
    if(user.username === username && user.password === password) {
      localStorage.setItem(username, username);
      setIsGuest(false);
    }
  }

  function hadleClickExit() {
    localStorage.removeItem(user.username);
    setIsGuest(true);
  }

  return (
    <div className={`app ${isGuest && 'app__guest'}`}>
      <Header onClickExit={hadleClickExit} />
      <Login onSubmitFormLogin={handleSubmitFormLogin} />
    </div>
  );
}

export default App;
