import React, { Component } from 'react'
import CharacterRoleCopy from '../../CharacterSelectionDetails/CharacterRoleCopy'
import RoleContext from '../../../Character-context/RoleContext';

class RoleTextDeails extends Component {
  static contextType = RoleContext;

  render() {
    const roleCopy = CharacterRoleCopy[this.context.characterrole] || {}
    return (
      <section>
        <p>{roleCopy.body}</p>
      </section>
    )
  }
}

export default RoleTextDeails