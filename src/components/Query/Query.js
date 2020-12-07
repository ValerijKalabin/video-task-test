import './Query.css';
import {  Button } from 'antd';

function Query({ item, index, onClickQueryEdit }) {
  function handleClickEdit() {
    onClickQueryEdit(index);
  }

  return (
    <div className="query">
      <p className="query__text">{item.name}</p>
      <div>
        <Button type="link" >Выполнить</Button>
        <Button type="link" onClick={handleClickEdit}>Редактировать</Button>
      </div>
    </div>
  );
}

export default Query;
