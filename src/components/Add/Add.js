import './Add.css';
import React from 'react';
import QueryContext from '../../contexts/QueryContext';
import { Modal, Form, Input, Slider, InputNumber, Button, Row, Col  } from 'antd';

function Add({ visibleModalAdd, title, isDisabledQueryInput, onCloseModalAdd, addQuery }) {
  const [form] = Form.useForm();
  const [countValue, setCountValue] = React.useState(0);
  const { query, name, count } = React.useContext(QueryContext);

  function handleChangeCount(value) {
    setCountValue(value);
  }

  function handleFinish({ query, name }) {
    addQuery({
      query: query,
      name: name,
      count: countValue
    });
  }

  React.useEffect(() => {
    if(visibleModalAdd) {
      form.setFieldsValue({
        query: query,
        name: name,
      });
      setCountValue(count)
    }
  }, [visibleModalAdd, form, query, name, count]);

  return (
    <Modal
      visible={visibleModalAdd}
      title={title}
      onCancel={onCloseModalAdd}
      footer={[]}
    >
      <Form
        form={form}
        layout="vertical"
        name="add"
        onFinish={handleFinish}
      >
        <Form.Item label="Запрос" name="query">
          <Input disabled={isDisabledQueryInput} />
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
          <Input />
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
