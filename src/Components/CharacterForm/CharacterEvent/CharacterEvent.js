import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CharacterEvent extends Component {
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
                    <h3>Career Event</h3>
                </header>
                <form class='new-character-form'>
                    <fieldset>
                        <select id='note-folder-select' name='note-folder-id'>
                        <option value="">Ship Destroyed</option>
                        <option value="">Required to Take Command</option>
                        <option value="">Mentored</option>
                        <option value="">Betrayed Ideals for A Superior</option>
                        <option value="">First Contact</option>
                        </select>
                        <br />
                        <Link to='/new-character/name'>Next</Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

