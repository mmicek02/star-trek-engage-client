import React, { Component } from 'react'
import TokenService from '../../Services/token-services';
import { Button, Input } from '../../Utils/Utils';

class LoginForm extends Component {

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    error: null
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { username , userpassword } = ev.target

    console.log('login form submitted')
    console.log({ username, userpassword})

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, userpassword.value)
    )

    username.value = ''
    userpassword.value = ''
    this.props.onLoginSuccess()
  }

  render() {
    const {error} = this.state

    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitBasicAuth}
      >
        <div role='alert'>
          {error && <p> {error} </p>}
        </div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            Username
          </label>
          <Input
            required
            name='username'
            id='LoginForm__user_name'>
          </Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            required
            name='userpassword'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button 
          type='submit'>
          Login
        </Button>
      </form>
    )
  }
}
export default LoginForm