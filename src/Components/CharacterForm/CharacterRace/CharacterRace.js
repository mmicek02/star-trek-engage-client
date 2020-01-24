import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CharacterRace extends Component {
    /* 
      This componet will render the form that allows a  user
      to create their very own character for the Star Trek TTRPG.
  
      Once the form is complete it should load the Character in the CharacterView 
      component.
    */
    render() {
        return (
            <div>
                <header>
                    <h3>Choose a Race</h3>
                </header>
                <form class='new-character-form'>
                    <fieldset>
                    <label class="answerOption">
                        <input type="radio" value="Human" name="answer" required />
                        <span>Human</span>
                    </label>
                    <label class="answerOption">
                        <input type="radio" value="Vulcan" name="answer" required />
                        <span>Vulcan</span>
                    </label>
                    <label class="answerOption">
                        <input type="radio" value="Denobulan" name="answer" required />
                        <span>Denobulan</span>
                    </label>
                    <label class="answerOption">
                        <input type="radio" value="Tellarite" name="answer" required />
                        <span>Tellarite</span>
                    </label>
                    <label class="answerOption">
                        <input type="radio" value="Andorian" name="answer" required />
                        <span>Andorian</span>
                    </label>
                        <br />
                        <Link to='/new-character/values'>
                            Next
                        </Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

