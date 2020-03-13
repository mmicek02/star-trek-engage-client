import React from 'react';
import ReactDOM from 'react-dom'
import CharacterListMain from './CharacterListMain'

describe(`CharacterListMain component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterListMain />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})