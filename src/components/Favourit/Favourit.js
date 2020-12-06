import './Favourit.css';
import {  List } from 'antd';

function Favourit({ queries }) {
  return (
    <main className="favourit">
      <div className="favourit__container">
        <h1 className="favourit__title">Избранное</h1>
        <List
          className="favourit__list"
          size="large"
          bordered
          dataSource={queries}
          renderItem={item => <List.Item>{item.name}</List.Item>}
        />
      </div>
    </main>
  );
}

export default Favourit;
