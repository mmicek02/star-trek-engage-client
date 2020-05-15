import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm';

export default class LoginPage extends Component {

  render() {
    return (
      <div className='LoginPage'>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.props.afterLogin} />
        <p>
          username: MikeTest
          <br />
          password: MikePa$$w0rd
        </p>
      </div>
    )
  }
}