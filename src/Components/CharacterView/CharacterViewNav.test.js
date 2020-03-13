import React from 'react';
import ReactDOM from 'react-dom'
import CharacterViewNav from './CharacterViewNav'

describe(`CharacterViewNav component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterViewNav />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})