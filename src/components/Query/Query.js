import './Query.css';
import {  Button } from 'antd';
import { Link } from 'react-router-dom';

function Query({ item, index, onClickQueryRun, onClickQueryEdit }) {
  function handleClickRun() {
    onClickQueryRun(item);
  }

  function handleClickEdit() {
    onClickQueryEdit(index);
  }

  return (
    <div className="query">
      <p className="query__text">{item.name}</p>
      <div>
        <Button type="link" onClick={handleClickRun}>
          <Link to="/search">Выполнить</Link>
        </Button>
        <Button type="link" onClick={handleClickEdit}>
          Редактировать
        </Button>
      </div>
    </div>
  );
}

export default Query;
