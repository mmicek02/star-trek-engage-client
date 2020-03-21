import React, { Component } from 'react'
import TokenService from '../../Services/token-services';

class LoginForm extends Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { username , userpassword } = ev.target


    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, userpassword.value)
    )

    username.value = ''
    userpassword.value = ''
    this.props.onLoginSuccess()
  }

  render() {

    return (
      <form
        className='LoginForm'
      >
        <div role='alert'>
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button 
          type='submit'
          onClick={e => this.handleSubmitBasicAuth}>
          Login
        </button>
      </form>
    )
  }
}
export default LoginForm