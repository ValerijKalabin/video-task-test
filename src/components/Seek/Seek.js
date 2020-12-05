import './Seek.css';
import {  Input  } from 'antd';
import user from '../../data/user.json';
const { Search } = Input;

function Seek() {
  const isGuest = !localStorage.getItem(user.username);

  function handleSearch(value) {
    console.log(value);
  }

  return (
    <Search
      className={isGuest && 'seek_hidden'}
      placeholder="Что хотите посмотреть?"
      allowClear
      enterButton="Найти"
      size="large"
      onSearch={handleSearch}
    />
  );
}

export default Seek;
