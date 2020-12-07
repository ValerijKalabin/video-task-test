import './Header.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { Menu } from 'antd';

function Header({
  isVisible,
  currentPage,
  onClickMenuItem,
  onClickExit
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
<<<<<<< HEAD
          <Menu.Item key="search">
            <Link to="/search">Поиск</Link>
          </Menu.Item>
          <Menu.Item key="favourites">
            <Link to="/favourites">Избранное</Link>
          </Menu.Item>
=======
          <Menu.Item key="search">Поиск</Menu.Item>
          <Menu.Item key="favourites">Избранное</Menu.Item>
>>>>>>> develop
        </Menu>
        <Menu
          mode="horizontal"
          selectedKeys={[]}
          onClick={onClickExit}
        >
          <Menu.Item key="exit">Выйти</Menu.Item>
        </Menu>
      </div>
    </header>

  );
}

export default Header;
