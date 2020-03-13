import React from 'react';
import ReactDOM from 'react-dom'
import CharacterPageMain from './CharacterPageMain'

describe(`CharacterPageMain component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterPageMain />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})