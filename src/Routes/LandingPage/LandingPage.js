import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import '../../style/main.css'

export default class LandingPage extends Component {
    render() {
        const commBadge = require('../../Media/CommsBadge.png');
        const dice = require('../../Media/Dice.png');
        const pencil = require('../../Media/pencil.png');
        return (
            <div>
                <section>
                    <header>
                        <h3>The Next Generation of Character Creation</h3>
                    </header>
                    <p><img 
                        src={commBadge}
                        alt="" 
                        width="200px"/></p>
                    <p>Star Trek Engage is a web application designed as an aid to to players of the Star 
                    Trek tabletop role playing game (TTRPG) character creation process. This app will take 
                    the user (player) through each step involved in the process of making their 
                    character.</p>
                    <br />
                    <Link
                        className="add-character-button" 
                        to='/new-character'>CREATE A CHARACTER</Link>
                </section>
                <section>
                    <header>
                        <h3>Set Your Phaser!</h3>
                    </header>
                    <p><img 
                        src={dice}
                        alt="" 
                        width='200px'/></p>
                    <p>You will be able to find all of your characters equipment quickly and easily, meaning you have to spend less time searching and more time taking action and rolling dice with friends!</p>
                </section>
            </div>
        )
    }
}