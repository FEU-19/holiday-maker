import React from "react";
import { shallow, mount, render } from 'enzyme';
import ReactDOM from 'react-dom'

import Registration from "../../views/Registration";
import RenderInputs from "./RenderInputs";
import RenderMsg from './RenderMsg';
import RegistrationComp from './RegistrationComp';
import RegisterButton from './RegisterButton';

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
   
    it('Finds the first input', () => {
        const wrapper = shallow(<RenderInputs newUser={newUser}/>);
        let nameInput = wrapper.find('input').first();
        console.log(wrapper.length );
        console.log(nameInput);

        
        
        // nameInput.simulate('change', {
        //     target: {value: 'Bob'}
        // })
      
        

        // expect(wrapper.find('form').exists())
        // .toBe(true);
        
        // expect(nameInput.state().value).toEqual('');
    });
});

