import './Favourit.css';
import {  List } from 'antd';
import Query from '../Query/Query';

function Favourit({
  isVisible,
  onClickQueryRun,
  onClickQueryEdit
}) {
  return (
    <main className={`favourit ${isVisible && 'favourit_visible'}`}>
      <div className="favourit__container">
        <h1 className="favourit__title">Избранное</h1>
        <List
          className="favourit__list"
          size="large"
          bordered
          dataSource={localStorage.getItem('queries') ?
            JSON.parse(localStorage.getItem('queries')) : []
          }
          renderItem={(item, index) =>
            <List.Item>
              <Query
                item={item}
                index={index}
                onClickQueryRun={onClickQueryRun}
                onClickQueryEdit={onClickQueryEdit}
              />
            </List.Item>
          }
        />
      </div>
    </main>
  );
}

export default Favourit;
