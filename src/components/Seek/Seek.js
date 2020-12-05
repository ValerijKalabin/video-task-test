import './Seek.css';
import {  Input  } from 'antd';
const { Search } = Input;

function Seek() {

  function handleSearch(value) {
    console.log(value);
  }

  return (
    <main className="seek">
      <h1 className="seek__title">Поиск видео</h1>
      <div className="seek__input">
        <Search
          placeholder="Что хотите посмотреть?"
          allowClear
          enterButton="Найти"
          size="large"
          onSearch={handleSearch}
        />
      </div>
    </main>
  );
}

export default Seek;
