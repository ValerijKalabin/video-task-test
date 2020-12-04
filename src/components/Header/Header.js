import './Header.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { Menu } from 'antd';
import user from '../../data/user.json';

function Header({ onClickExit }) {
  const isGuest = !localStorage.getItem(user.username);
  const [current, setCurrent] = React.useState('search')

  function handleClick(event) {
    if(event.key === 'exit') {
      onClickExit();
    } else {
      setCurrent(event.key);
    }
  };

  return (
    <header className={`header ${isGuest && 'header_hidden'}`}>
      <Menu
        className="header__menu"
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[current]}
      >
        <img className="header__logo" src={logo} alt="Логотип" />
        <Menu.Item key="search">Поиск</Menu.Item>
        <Menu.Item key="favourites">Избранное</Menu.Item>
        <Menu.Item key="exit">Выйти</Menu.Item>
      </Menu>
    </header>

  );
}

export default Header;
