import './Login.css';
import logo from '../../images/logo.svg';
import { Form, Input, Button } from 'antd';

function Login({ onSubmitFormLogin }) {

  function onFinish(values) {
    onSubmitFormLogin(values);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      className="login__form"
      onFinish={onFinish}
    >
      <img className="login__logo" src={logo} alt="Логотип" />
      <h1 className="login__title">Вход</h1>
      <Form.Item label="Логин" name="username">
        <Input className="login__input" />
      </Form.Item>
      <Form.Item label="Пароль" name="password">
        <Input.Password className="login__input"/>
      </Form.Item>
      <Form.Item>
        <Button className="login__button" htmlType="submit" type="primary">Войти</Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
