import React from "react";
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom'

import Registration from "../../views/Registration";
import RenderInputs from "./RenderInputs";
import RenderMsg from './RenderMsg';
import RegistrationComp from './RegistrationComp';
import RegisterButton from './RegisterButton';

it ('renders without crashing', () => {
    const Container = document.createElement('Container');
    ReactDOM.render(<Registration />, Container)
});


describe('Form', () => {
    it('Finds the first input', () => {
        const wrapper = shallow(<RenderInputs />)
        const form = wrapper.find('form');
        let val = 'first_name'
        let nameInput = form.find('input' .value(val)).first();

        expect(nameInput);
    });
});

// // import BasicInput from './basic-input';


// describe('basic input component', () => {
//     it('should renders without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<RenderInputs />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });

//     it('should render a placeholder', () => {
//         const placeholder_text = 'type anything here';
//         const wrapper = shallow(<RenderInputs placeholder={placeholder_text} />);
//         expect(wrapper.prop('placeholder')).toEqual(placeholder_text);
//     });

//     it('should render a correct type', () => {
//         const type = 'password';
//         const wrapper = shallow(<RenderInputs type={type} />);
//         expect(wrapper.prop('type')).toEqual(type);
//     });
// });