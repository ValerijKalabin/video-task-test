import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Seek from '../Seek/Seek';
import Favourit from '../Favourit/Favourit';
import Add from '../Add/Add';
import user from '../../data/user.json';

function App() {
  const [isGuest, setIsGuest] = React.useState(!localStorage.getItem(user.username));
  const [visibleModalAdd, setVisibleModalAdd] = React.useState(false)
  const [query, setQuery] = React.useState('');
  const [queries, setQueries] = React.useState([]);
  const [clips, setСlips] = React.useState([]);

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

  function handleSearchVideo(data) {
    fetch(`https://www.googleapis.com/youtube/v3/search`
      + `?part=snippet`
      + `&type=video`
      + `&q=${data.query}`
      + `&maxResults=${data.count}`
      + `&key=AIzaSyB_CL-jK3MdyAk4jltnf4zbvkmPTeteGM0`,
      { method: 'GET'}
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((res) => {
        setQuery(data.query);
        setСlips(res.items);
      })
      .catch(() => {
        alert('Что-то пошло не так. Повторите запрос.')
      });
  }

  function handleClickHeart() {
    setVisibleModalAdd(true);
  }

  function handleCloseModalAdd() {
    setVisibleModalAdd(false);
  }

  function handleAddQuery(query) {
    setVisibleModalAdd(false);
    setQueries([...queries, query]);
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
              <Seek
                query={query}
                clips={clips}
                onSearchVideo={handleSearchVideo}
                onClickHeart={handleClickHeart}    />
              <Add
                query={query}
                visibleModalAdd={visibleModalAdd}
                onCloseModalAdd={handleCloseModalAdd}
                addQuery={handleAddQuery}
              />
            </>
          }
        </Route>
        <Route path="/favourites">
          {
            isGuest ?
            <Redirect to="/" /> :
            <>
              <Header onClickExit={hadleClickExit} />
              <Favourit queries={queries} />
            </>
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
