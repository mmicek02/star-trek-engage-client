import React from 'react';
import ReactDOM from 'react-dom'
import UserHomePage from './UserHomePage'

describe(`UserHomePage component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <UserHomePage />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})