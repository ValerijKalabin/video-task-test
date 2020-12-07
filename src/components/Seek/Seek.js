import './Seek.css';
import React from 'react';
import {  Input  } from 'antd';
import Video from '../Video/Video';
import Heart from '../Heart/Heart';
import QueryContext from '../../contexts/QueryContext';
const { Search } = Input;

function Seek({ clips, onSearchVideo, onClickHeart }) {
  const [layout, setLayout] = React.useState('grid');
  const { query } = React.useContext(QueryContext);

  function handleSearch(value) {
    onSearchVideo({
      query: value,
      name: '',
      count: 12,
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
          enterButton="Найти"
          size="large"
          suffix={<Heart clipsLength={clips.length} onClickHeart={onClickHeart} />}
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
