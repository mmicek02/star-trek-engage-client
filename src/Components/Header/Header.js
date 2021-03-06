import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import TokenService from '../../Services/token-services'
import ApiContext from '../../ApiContext'
import '../../style/main.css'

class Header extends Component {
  static contextType = ApiContext;
  
  handleLogoutClick = () => {
      TokenService.clearAuthToken()
  }
  
    renderLogoutLink() {
      const { users =[] } = this.context
      return (
        <div className='Header__logged-in'>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
          </Link>
          {' / '}
          <Link
            to='/mycharacters'>
            View Characters
          </Link>
        </div>
      )
    }

    renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            <Link
              to='/register'>
              Register
            </Link>
            {' / '}
            <Link
              to='/login'>
              Log in
            </Link>
          </div>
        )
      }
    render() {
        const logo = require('../../Media/StarTrekEngageLogo.png');
        return (
            <nav className='Header'>
                <Link to='/'>
                <img 
                    src={logo} 
                    alt="Logo for Star Trek Engage!"
                    className='logo'
                />
                </Link>
                <br />
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}              
          </nav>
        )
    }
}

export default Header