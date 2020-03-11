import React from 'react'
import ApiContext from '../../ApiContext'
import { findCharacter } from '../../characters-helpers'
import './characterMainPage.css'

export default class CharacterPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteNote = characterid => {
    this.props.history.push(`/`)
  }

  render() {
    const { characters } = this.context
    const { characterid } = this.props.match.params
    const character = findCharacter(characters, characterid)
    if (!character) {
      return <div></div>
    } 
    return (
      <section className='CharacterPageMain'>
        <div className='CharacterPageMain__characterSheet'>
          {character.charactername.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
          <h2>{character.charactername}</h2>
          <section>
            <h4 className="GroupHeading">Species: {character.species}</h4>
            <h4 className="GroupHeading">Role: {character.characterrole}</h4>
          </section>
          <section>
            <h3 className="GroupHeading">Attributes</h3>
              <ul>
                <li>Control: {character.attributes[0]}</li>
                <li>Fitness: {character.attributes[1]}</li>
                <li>Presence: {character.attributes[2]}</li>
                <li>Daring: {character.attributes[3]}</li>
                <li>Insight: {character.attributes[4]}</li>
                <li>Reason: {character.attributes[5]}</li>
              </ul>
          </section>
          <section>
            <h3 className="GroupHeading">Disciplines</h3>
              <ul>
                <li>Command: {character.disciplines[0]}</li>
                <li>Security: {character.disciplines[1]}</li>
                <li>Science: {character.disciplines[2]}</li>
                <li>Conn: {character.disciplines[3]}</li>
                <li>Engingeering: {character.disciplines[4]}</li>
                <li>Medicine: {character.disciplines[5]}</li>
              </ul>
          </section>
          <section>
            <h3 className="GroupHeading">Value</h3>
            <p>{character.charactervalue}</p>
          </section>
          <section>
            <h3 className="GroupHeading">Equipment</h3>
            <p>{character.equipment}</p>
          </section>
        </div>
      </section>
    )
  }
}
