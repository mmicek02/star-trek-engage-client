import React from 'react';
import ReactDOM from 'react-dom'
import RegistrationForm from './RegistrationForm'

describe(`RegistrationForm component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <RegistrationForm />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})