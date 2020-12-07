import './Favourit.css';
import {  List } from 'antd';
import Query from '../Query/Query';

function Favourit() {
  return (
    <main className="favourit">
      <div className="favourit__container">
        <h1 className="favourit__title">Избранное</h1>
        <List
          className="favourit__list"
          size="large"
          bordered
          dataSource={localStorage.getItem('queries') ? JSON.parse(localStorage.getItem('queries')) : []}
          renderItem={item => <List.Item><Query item={item} /></List.Item>}
        />
      </div>
    </main>
  );
}

export default Favourit;
