import React, { Component } from 'react';
import CharacterName from '../CharacterForm/CharacterName/CharacterName';
export default class CharacterView extends Component {
    /* 
      This componet will render the a character that a user has
      already created.
    */
    constructor(props) {
        super(props)

    }
    render() {
        return (
        <div>
            <header role="banner">
                <h1>Star Fleet Engage!</h1>
                <h2>Welcome to Star Fleet!</h2>
            </header>
            <section>
                <header>
                    <h3>Starfleet Personnal File</h3>
                </header>
                <h4>Name: {this.state.character.name}</h4>
                <h4>Species: Human</h4>
                <h4>Environment: Isolated Colony</h4>
                <h4>Assignment: Science Office</h4>
                <h4>Traits: </h4>
                <h4>Rank: Commander</h4>
                <h4>Upbringing: Rural</h4>
            </section>
            <section>
                <header>
                    <h3>Attributes</h3>
                </header>
                <h4>Control: 10</h4>
                <h4>Fitness: 8</h4>
                <h4>Presence: 10</h4>
                <h4>Daring: 7</h4>
                <h4>Insight: 9</h4>
                <h4>Reason: 12</h4>
            </section>
            <section>
                <header>
                    <h3>Disciplines</h3>
                </header>
                <h4>Command: 3</h4>
                <h4>Security: 2</h4>
                <h4>Science: 3</h4>
                <h4>Conn: 2</h4>
                <h4>Engineering: 1</h4>
                <h4>Medicine: 3</h4>
            </section>
            <section>
                <header>
                    <h3>Values</h3>
                </header>
                <ul>
                    <li>Understanding is the Purpose of Life</li>
                    <li>Seen Too Much to be Surprised</li>
                </ul>
            </section>
            <section>
                <header>
                    <h3>Determination</h3>
                </header>
                <em>Check when used</em>
                <form>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                </form>
            </section>
            <section>
                <header>
                    <h3>Talents</h3>
                </header>
                <ul>
                    <li>Cautious</li>
                    <li>Intense Scrutiny</li>
                    <li>Technical Expertise</li>
                </ul>
            </section>
            <section>
                <header>
                    <h3>Focuses</h3>
                </header>
                <ul>
                    <li>Survival Training</li>
                    <li>Uniform Code of Justice</li>
                    <li>Linguistics</li>
                </ul>
            </section>
            <section>
                <header>
                    <h3>Stress</h3>
                </header>
                <em>Check when used</em>
                <form>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <br />
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <br />
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <input type="checkbox"></input>
                    <br />
                </form>
            </section>
            <section>
            <header>
                <h3>Equipment/ Weapons</h3>
            </header>
            <form>
                    <input type="text" name="Weapons and Equipment" />
            </form>
            </section>
        </div>
        )
    }
}