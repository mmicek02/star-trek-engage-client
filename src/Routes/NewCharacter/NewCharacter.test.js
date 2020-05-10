import React from 'react';
import ReactDOM from 'react-dom'
import NewCharacter from './NewCharacter'

describe(`NewCharacter component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <NewCharacter />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})