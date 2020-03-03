import React from 'react'
import ApiContext from '../../ApiContext'
import { findCharacter } from '../../characters-helpers'

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
    const character = findCharacter(characters, characterid) || { charactername: '' }
    return (
      <section className='CharacterPageMain'>
        <div className='CharacterPageMain__charactername'>
          {character.charactername.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
          <h2>{character.charactername}</h2>
          <section>
            <h4>Species: {character.species}</h4>
            <h4>Role: {character.characterrole}</h4>
          </section>
          <section>
            <h3>Attributes</h3>
            <section>
              <ul>
                <li>Control: {character.attributes}</li>
                <li>Fitness: {character.attributes}</li>
                <li>Presence: {character.attributes}</li>
              </ul>
            </section>
            <section>
              <ul>
                <li>Daring: {character.attributes}</li>
                <li>Insight: {character.attributes}</li>
                <li>Reason: {character.attributes}</li>
              </ul>
            </section>
          </section>
          <section>
            <h3>Disciplines</h3>
            <section>
              <ul>
                <li>Command: {character.disciplines}</li>
                <li>Security: {character.disciplines}</li>
                <li>Science: {character.disciplines}</li>
              </ul>
            </section>
            <section>
              <ul>
                <li>Conn: {character.disciplines}</li>
                <li>Engingeering: {character.disciplines}</li>
                <li>Medicine: {character.disciplines}</li>
              </ul>
            </section>
          </section>
          <section>
            <h3>Value</h3>
            <p>{character.charactervalue}</p>
          </section>
          <section>
            <h3>Equipment</h3>
            <p>{character.equipment}</p>
          </section>
        </div>
      </section>
    )
  }
}
