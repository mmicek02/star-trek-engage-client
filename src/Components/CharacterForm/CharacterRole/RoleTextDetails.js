import React, { Component } from 'react'
import CharacterRoleCopy from '../../CharacterSelectionDetails/CharacterRoleCopy'
import SpeciesContext from '../../../Character-context/RoleContext';

class RoleTextDeails extends Component {
  static contextType = SpeciesContext;

  render() {
    const roleCopy = CharacterRoleCopy[this.context.role] || {}
    return (
      <section>
        <p>{roleCopy.body}</p>
      </section>
    )
  }
}

export default RoleTextDeails