import React, { Component } from 'react'
import CharacterSpeciesCopy from '../../CharacterSelectionDetails/CharacterSpeciesCopy'
import SpeciesContext from '../../../Character-context/SpeciesContext';

class SpeciesTextDetails extends Component {
  static contextType = SpeciesContext;

  render() {
    const speciesCopy = CharacterSpeciesCopy[this.context.species] || {}
    return (
      <section>
        <p>{speciesCopy.body}</p>
      </section>
    )
  }
}

export default SpeciesTextDetails