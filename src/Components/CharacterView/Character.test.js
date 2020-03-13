import React from 'react';
import ReactDOM from 'react-dom'
import Character from './Character'
import { BrowserRouter } from 'react-router-dom';

describe(`Character component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Character />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

})