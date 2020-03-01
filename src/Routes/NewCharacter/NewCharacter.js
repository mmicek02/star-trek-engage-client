import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CharacterRace from '../../Components/CharacterForm/CharacterRace/CharacterRace';
import CharacterValues from '../../Components/CharacterForm/CharacterValues/CharacterValues';


export default class NewCharacter extends Component {

  render() {
    return (
      <div className='LoginPage'>
        <h2>Create a New Character</h2>
      </div>
    )
  }
}