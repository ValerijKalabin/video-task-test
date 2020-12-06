import './Seek.css';
import React from 'react';
import {  Input  } from 'antd';
import Video from '../Video/Video';
const { Search } = Input;

function Seek() {
  const [query, setQuery] = React.useState('');
  const [clips, setСlips] = React.useState([]);
  const [layout, setLayout] = React.useState('grid')

  function handleSearch(value) {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&type=video&maxResults=12&key=AIzaSyB_CL-jK3MdyAk4jltnf4zbvkmPTeteGM0`, { method: 'GET'})
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((res) => {
        setQuery(value);
        setСlips(res.items);
      })
      .catch(() => {
        alert('Что-то пошло не так. Повторите запрос.')
      });
  }

  function handleClick(event) {
    setLayout(event.target.name);
  }

  return (
    <main className={`seek ${clips.length && 'seek_video'}`}>
      <h1 className={`seek__title ${clips.length && 'seek__title_video'}`}>Поиск видео</h1>
      <div className={`seek__input ${clips.length && 'seek__input_video'}`}>
        <Search
          placeholder="Что хотите посмотреть?"
          allowClear
          enterButton="Найти"
          size="large"
          onSearch={handleSearch}
        />
      </div>
      <div className={`seek__info ${clips.length && 'seek__info_video'}`}>
        <p className="seek__query" >Видео по запросу «{query}»</p>
        <div className="seek__buttons">
          <button
            className={`seek__button seek__button-list ${layout === 'list' && 'seek__button_active'}`}
            type="button"
            name="list"
            onClick={handleClick}
          />
          <button
            className={`seek__button seek__button-grid ${layout === 'grid' && 'seek__button_active'}`}
            type="button"
            name="grid"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className={`seek__clips ${layout === 'list' && 'seek__clips_layout_list'}`}>
        {clips.map((clip) => (
          <Video key={clip.id.videoId} clip={clip} layout={layout} />
        ))}
      </div>
    </main>
  );
}

export default Seek;
