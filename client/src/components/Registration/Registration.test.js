import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure,
    shallow,
    mount,
    ShallowWrapper,
    ReactWrapper } from 'enzyme';
import ReactDOM from 'react-dom'

import Registration from "../../views/Registration";
import * as Adapter from 'enzyme-adapter-react-16';


it ('renders without crashing', () => {
    const Container = document.createElement('Container');
    console.log(Container);
    ReactDOM.render(<Registration />, Container)
});


describe('Form', () => {
    const newUser ={
        first_name: "",
        email: "",
        surname: "",
        street: "",
        zip_code: "",
        city: "",
        country: "",
        phone_number: "",
        social_security_number: "",
        password: "",
        confirm_password: "",
      }
    //   const wrapper = mount(<Registration newUser={newUser} />);
    let reactWrapper: ReactWrapper;
    beforeEach(() => {
        reactWrapper = mount(<Registration newUser={newUser} />);
    });

    it('Child React Component html content would be rendered', () => {
        
        expect(reactWrapper.find('input').length).toBe(11);
        expect(reactWrapper.find('button').length).toBe(1);
      
       });
   
    it('Firs input should be EMPTY', () => {
        let nameInput = reactWrapper.find('input').first();

        console.log('nameInput  ',typeof nameInput);
        console.log('nameInput ', nameInput.length);

        expect(nameInput.props().value).toEqual('');
    });

    

    // it('Let me fill in name input', () => {
    //     let nameInput = reactWrapper.find('input').first();
    //     nameInput.simulate('change', {
    //         target: {first_name: 'Bob'},
    //     });

      
    //     console.log(nameInput.value);
    //     nameInput = reactWrapper.find('input').first();
    //     expect(nameInput.props().value).toEqual('Bob');
    // });
});

