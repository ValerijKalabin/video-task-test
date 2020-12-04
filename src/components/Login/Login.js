import './Login.css';
import logo from '../../images/logo.svg';
import { Form, Input, Button } from 'antd';
import user from '../../data/user.json';

function Login({ onSubmitFormLogin }) {
  const isGuest = !localStorage.getItem(user.username);

  function onFinish(values) {
    onSubmitFormLogin(values);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      className={`login__form ${!isGuest && 'login__form_hidden'}`}
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
