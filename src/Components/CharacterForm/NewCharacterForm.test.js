import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NewCharacterForm from './NewCharacterForm'

describe(`NewCharacterForm component`, () => {
  const stubUsers = [
    {
      "userid": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      "username": "TestUser"
    },
    {
      "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "TestAgain"
    },
    {
      "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Test"
    }
  ]
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewCharacterForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the complete form', () => {
    const wrapper = shallow(<NewCharacterForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't support React.createContext
  it.skip('renders the select options from Users', () => {
    const context = { users: stubUsers }
    const select = shallow(<NewCharacterForm />, context)
      .find('#note-folder-select')
    expect(toJson(select)).toMatchSnapshot()
  })
})