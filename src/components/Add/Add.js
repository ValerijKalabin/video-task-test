import './Add.css';
import React from 'react';
import {  Modal, Form, Input, Slider, InputNumber, Button, Row, Col  } from 'antd';

function Add({ query, visibleModalAdd, onCloseModalAdd, addQuery }) {
  const [nameValue, setNameValue] = React.useState('');
  const [countValue, setCountValue] = React.useState(12);

  function handleChangeName(event) {
    setNameValue(event.target.value);
  }

  function handleChangeCount(value) {
    setCountValue(value);
  }

  function handleSubmit() {
    addQuery({
      query: query,
      name: nameValue,
      count: countValue
    });
  }

  return (
    <Modal
      visible={visibleModalAdd}
      title="Сохранить запрос"
      onCancel={onCloseModalAdd}
      footer={[]}
    >
      <Form
        layout="vertical"
        name="add"
        onFinish={handleSubmit}
      >
        <Form.Item label="Запрос" name="query">
          <Input defaultValue={query} disabled />
        </Form.Item>
        <Form.Item
          label="Название"
          name="name"
          rules={[
            {
              required: true,
              message: 'Укажите название запроса',
            },
          ]}
        >
          <Input value={nameValue} onChange={handleChangeName} />
        </Form.Item>
        <Form.Item label="Максимальное количество" name="count">
          <Row>
            <Col span={18}>
              <Slider
                min={1}
                max={50}
                defaultValue={12}
                value={countValue}
                onChange={handleChangeCount}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={50}
                defaultValue={12}
                style={{ margin: '0 20px' }}
                value={countValue}
                onChange={handleChangeCount}
              />
            </Col>
          </Row>
          </Form.Item>
        <Row>
          <Col>
            <Form.Item>
              <Button
                htmlType="button"
                style={{ margin: '0 5px', width: '226px' }}
                onClick={onCloseModalAdd}
              >
                Не сохранять
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                style={{ margin: '0 5px', width: '226px'}}
              >
                Сохранить
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}

export default Add;
