import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import RegistrationPage from '../RegistrationPage/RegistrationPage';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <section>
                    <header>
                        <h3>The Next Generation of Character Creation</h3>
                    </header>
                    <p>[<em>placeholder for graphic of dice</em>]</p>
                    <p>Star Trek Engage is a web application designed as an aid to to players of the Star 
                    Trek tabletop role playing game (TTRPG) character creation process. This app will take 
                    the user (player) through each step involved in the process of making their 
                    character.</p>
                    <Link to='/new-character/race'>CREATE A CHARACTER</Link>
                </section>
                <section>
                    <header>
                        <h3>Set Your Phaser!</h3>
                    </header>
                    <p>[<em>placeholder for graphic of star trek phaser</em>]</p>
                    <p>You will be able to find all of your characters equipment quickly and easily, meaning you have to spend less time searching and more time taking action and rolling dice with friends!</p>
                </section>
                <section>
                    <header>
                        <h3>Keep track of your progress</h3>
                    </header>
                    <p>[<em>placeholder for graphic of pencil or paper</em>]</p>
                    <p>Take notes and comment on your character sheet so you can remember everything that happens during your gaming session!</p>
                </section>
                <section>
                    <RegistrationPage />
                </section>
            </div>
        )
    }
}