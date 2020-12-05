import './Header.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { Menu } from 'antd';

function Header({ onClickExit }) {
  const [current, setCurrent] = React.useState('search')

  function handleClick(event) {
    if(event.key === 'exit') {
      onClickExit();
    } else {
      setCurrent(event.key);
    }
  };

  return (
    <header className="header">
      <div className="header__menu">
        <img className="header__logo" src={logo} alt="Логотип" />
        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={[current]}
        >
          <Menu.Item key="search">Поиск</Menu.Item>
          <Menu.Item key="favourites">Избранное</Menu.Item>
        </Menu>
        <Menu
          mode="horizontal"
          onClick={handleClick}
        >
          <Menu.Item key="exit">Выйти</Menu.Item>
        </Menu>
      </div>
    </header>

  );
}

export default Header;
