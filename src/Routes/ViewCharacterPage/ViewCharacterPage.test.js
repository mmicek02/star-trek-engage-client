import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import ViewCharacterPage from './ViewCharacterPage'

describe(`ViewCharacterPage component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ViewCharacterPage />
      </BrowserRouter> ,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})