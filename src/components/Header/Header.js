import './Header.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { Menu } from 'antd';

function Header({
  isVisible,
  currentPage,
  onClickMenuItem
}) {
  return (
    <header className={`header ${isVisible && 'header_visible'}`}>
      <div className="header__menu">
        <Menu
          mode="horizontal"
          selectedKeys={[currentPage]}
          onClick={onClickMenuItem}
        >
          <img className="header__logo" src={logo} alt="Логотип" />
          <Menu.Item key="search">Поиск</Menu.Item>
          <Menu.Item key="favourites">Избранное</Menu.Item>
        </Menu>
        <Menu
          mode="horizontal"
          selectedKeys={[]}
          onClick={onClickMenuItem}
        >
          <Menu.Item key="exit">Выйти</Menu.Item>
        </Menu>
      </div>
    </header>

  );
}

export default Header;
