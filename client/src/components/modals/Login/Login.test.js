import React from "react";
import ReactDOM from 'react-dom';
import {
    configure,
    shallow,
    mount,
    ShallowWrapper,
    ReactWrapper,
    } from 'enzyme';
import Login from "./Login";
import sinon from 'sinon'

it ('renders without crashing', () => {
    const Container = document.createElement('Container');
    ReactDOM.render(<Login />, Container)
});

describe('form', () => {
    const user = {
        email: '',
        password: '',
    };
    it('form exists', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('form').exists())
        .toBe(true);
    });
    let reactWrapper: ReactWrapper;
    beforeEach(() => {
        reactWrapper = mount(<Login user={user} />);
    });
    it('Textfields exists', () => {
        expect(reactWrapper.find('input').length).toBe(2);
        expect(reactWrapper.find('button').length).toBe(1);
    });
    it('simulates click events', () => {
        // const wrapper = shallow(<Login />);
        // const button = wrapper.find('button');
        // const valueBefore = wrapper.Object.is('user')
        //expect(valueBefore).Object.is('')


        // const onSubmit = sinon.spy();
        // const wrapper = mount((
        //   <Login onSubmit={onSubmit} />
        // ));
        // wrapper.find('button').simulate('click');
        
        // expect('onSubmit').to.call.function('onSubmit');
    });
});

