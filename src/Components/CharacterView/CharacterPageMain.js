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
        </div>
      </section>
    )
  }
}
