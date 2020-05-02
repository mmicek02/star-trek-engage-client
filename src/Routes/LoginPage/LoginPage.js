import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm';

export default class LoginPage extends Component {

  render() {
    return (
      <div className='LoginPage'>
        <h2>Login</h2>
        <LoginForm />
        <p>
          username: DemoAccount
          <br />
          password: DemoPassword
        </p>
      </div>
    )
  }
}