import './Query.css';
import {  Button } from 'antd';

function Query({ item }) {
  return (
    <div className="query">
      <p className="query__text">{item.name}</p>
      <Button type="link">Редактировать</Button>
    </div>
  );
}

export default Query;
