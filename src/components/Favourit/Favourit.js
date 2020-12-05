import './Favourit.css';
import {  List } from 'antd';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function Favourit() {
  return (
    <main className="favourit">
      <div className="favourit__container">
        <h1 className="favourit__title">Избранное</h1>
        <List
          className="favourit__list"
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    </main>
  );
}

export default Favourit;
