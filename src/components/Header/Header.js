import './Header.css';
import React from 'react';
import { Link, useRouteMatch  } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Menu } from 'antd';

function Header({ onClickExit }) {
  const { path } = useRouteMatch();
  const [clickedItem, setClickedItem] = React.useState('');

  function hahdleClickItem(event) {
    setClickedItem(event.key);
  }

  React.useEffect(() => {
    setClickedItem(path.slice(1));
  }, [path]);

  return (
    <header className="header">
      <div className="header__menu">
        <Menu
          mode="horizontal"
          onClick={hahdleClickItem}
          selectedKeys={[clickedItem]}
        >
          <img className="header__logo" src={logo} alt="Логотип" />
          <Menu.Item key="search"><Link to="/search">Поиск</Link></Menu.Item>
          <Menu.Item key="favourites"><Link to="/favourites">Избранное</Link></Menu.Item>
        </Menu>
        <Menu
          mode="horizontal"
          onClick={onClickExit}
        >
          <Menu.Item key="exit">Выйти</Menu.Item>
        </Menu>
      </div>
    </header>

  );
}

export default Header;
