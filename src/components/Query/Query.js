import './Query.css';
import {  Button } from 'antd';

function Query({
  item,
  index,
  onClickQueryRun,
  onClickQueryEdit
}) {
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
          Выполнить
        </Button>
        <Button type="link" onClick={handleClickEdit}>
          Редактировать
        </Button>
      </div>
    </div>
  );
}

export default Query;
