import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/main.css'

class Header extends Component {

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
                <Link to='/login'>
                    Login
                </Link>
                {' / '}
                <Link to='/register'>
                    Register
                </Link>
                {' / '}
                <Link to='/api/users/1'>
                    View Characters
                </Link>
          </nav>
        )
    }
}

export default Header