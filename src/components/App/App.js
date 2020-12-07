import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import QueryContext from '../../contexts/QueryContext';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Seek from '../Seek/Seek';
import Favourit from '../Favourit/Favourit';
import Popup from '../Popup/Popup';
import user from '../../data/user.json';

function App() {
  const [isGuest, setIsGuest] = React.useState(!localStorage.getItem(user.username));
  const [isVisiblePopup, setVisiblePopup] = React.useState(false);
  const [popupTitle, setPopupTitle] = React.useState('');
  const [isDisabledQueryInput, setIsDisabledQueryInput] = React.useState(false);
  const [queryIndex, setQueryIndex] = React.useState(0);
  const [query, setQuery] = React.useState({});
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
        setQuery(data);
        setСlips(res.items);
      })
      .catch(() => {
        alert('Что-то пошло не так. Повторите запрос.')
      });
  }

  function handleClickHeart() {
    setQueryIndex(-1);
    setPopupTitle('Сохранить запрос');
    setIsDisabledQueryInput(true);
    setVisiblePopup(true);
  }

  function hadleEditQuery(index) {
    setQueryIndex(index);
    setPopupTitle('Изменить запрос');
    setIsDisabledQueryInput(false);
    setVisiblePopup(true);
  }

  function handleClosePopup() {
    setVisiblePopup(false);
  }

  function handleEditQueryList(query, index) {
    const queriesString = localStorage.getItem('queries');
    if(!queriesString) {
      localStorage.setItem('queries', JSON.stringify([query]));
    } else {
      const queriesList = JSON.parse(queriesString);
      if(index < 0) {
        queriesList[queriesList.length] = query;
      } else {
        queriesList[index] = query;
      }
      localStorage.setItem('queries', JSON.stringify(queriesList));
    }
    setVisiblePopup(false);
  }

  return (
    <div className={`app ${isGuest && 'app__guest'}`}>
      <QueryContext.Provider value={query}>
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
                clips={clips}
                onSearchVideo={handleSearchVideo}
                onClickHeart={handleClickHeart}
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
              <Favourit onClickQueryEdit={hadleEditQuery} />
            </>
          }
        </Route>
      </Switch>
      <Popup
        isVisible={isVisiblePopup}
        title={popupTitle}
        index={queryIndex}
        isDisabledQueryInput={isDisabledQueryInput}
        onClosePopup={handleClosePopup}
        onEditQueryList={handleEditQueryList}
      />
      </QueryContext.Provider>
    </div>
  );
}

export default App;
