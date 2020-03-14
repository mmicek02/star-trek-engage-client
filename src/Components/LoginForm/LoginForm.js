import React, { Component } from 'react'

class LoginForm extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
          userid: 1,
          username: '',
          password: '',
      }
  }

  updateUsername = (Username) => {
    this.setState({
        username: Username
    })
  }

  updatePassword = (Password) => {
    this.setState({
        password: Password
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const userInfo = {
        userid: this.state.userid,
        username: this.state.username,
        password: this.state.password
    }

    const url ='https://infinite-spire-80617.herokuapp.com/api/users';
    const options = {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'content-type': 'application/json'
        }
    };

    fetch(url, options)
  
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong, please try again later');
        }
        return res.json();
    })
    .then(resJson => {
        this.context.characters.push(resJson)
        this.props.history.push(`/api/users/${userInfo.userid}`)
    })
    .catch(err => {
        this.setState({
            error: err.message
        })
    })
  }

  render() {
    const error = this.state.error 
    ? <div className="error">{this.state.error}</div>
    : "";

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
            id='LoginForm__user_name'
            onChange={e => this.updateUsername(e.target.value)}>
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
            id='LoginForm__password'
            onChange={e => this.updatePassword(e.target.value)}>
          </input>
        </div>
        <button 
          type='submit'
          onClick={e => this.handleSubmit(e)}>
          Login
        </button>
        { error }
      </form>
    )
  }
}
export default LoginForm