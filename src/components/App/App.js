import './App.css';
import React from 'react';
import QueryContext from '../../contexts/QueryContext';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Seek from '../Seek/Seek';
import Favourit from '../Favourit/Favourit';
import Popup from '../Popup/Popup';
import user from '../../data/user.json';

function App() {
  const [isGuest, setIsGuest] = React.useState(!localStorage.getItem(user.username));
  const [currentPage, setCurrentPage] = React.useState('search');
  const [isVisiblePopup, setVisiblePopup] = React.useState(false);
  const [configPopup, setConfigPopup] = React.useState({});
  const [loading, setLoading] = React.useState(false);
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

  function handleClickMenuItem(event) {
    if(event.key === 'exit') {
      localStorage.removeItem(user.username);
      setIsGuest(true);
    } else {
      setCurrentPage(event.key);
    }
  }

  function handleSearchVideo(data) {
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleClickHeart() {
    setConfigPopup({
      title: 'Сохранить запрос',
      index: -1,
      isDisabledQueryInput: true
    });
    setVisiblePopup(true);
  }

  function hadleEditQuery(index) {
    setConfigPopup({
      title: 'Изменить запрос',
      index: index,
      isDisabledQueryInput: false
    });
    setVisiblePopup(true);
  }

  function handleEditQueryList(query, index) {
    const queriesString = localStorage.getItem('queries');
    if(!queriesString) {
      localStorage.setItem('queries', JSON.stringify([query]));
    } else {
      const queriesList = JSON.parse(queriesString);
      if(index === -1) {
        queriesList.push(query);
      } else {
        queriesList[index] = query;
      }
      localStorage.setItem('queries', JSON.stringify(queriesList));
    }
    setVisiblePopup(false);
  }

  function handleClosePopup() {
    setVisiblePopup(false);
  }

  function handleRunQuery(data) {
    setCurrentPage('search');
    handleSearchVideo(data);
  }

  return (
    <div className={`app ${isGuest && 'app__guest'}`}>
      <QueryContext.Provider value={query}>
        <Login
          isVisible={isGuest}
          onSubmitFormLogin={handleSubmitFormLogin}
        />
        <Header
          isVisible={!isGuest}
          currentPage={currentPage}
          onClickMenuItem={handleClickMenuItem}
        />
        <Seek
          isVisible={!isGuest && currentPage === 'search'}
          clips={clips}
          loading={loading}
          onSearchVideo={handleSearchVideo}
          onClickHeart={handleClickHeart}
        />
        <Favourit
          isVisible={!isGuest && currentPage === 'favourites'}
          onClickQueryRun={handleRunQuery}
          onClickQueryEdit={hadleEditQuery}
        />
        <Popup
          isVisible={isVisiblePopup}
          config = {configPopup}
          onClosePopup={handleClosePopup}
          onEditQueryList={handleEditQueryList}
        />
      </QueryContext.Provider>
    </div>
  );
}

export default App;
