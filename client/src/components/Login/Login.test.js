import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from 'react-dom'
import LoginView from "../../views/Login";
import {mount, shallow} from 'enzyme';
import Login from "./Login";


it ('renders without crashing', () => {
    const Container = document.createElement('Container');
    ReactDOM.render(<LoginView />, Container)
});

// it ('renders two input fields', () => {
//     const wrapper = shallow(<LoginView />)
//     expect(wrapper.find(input).to.have.lengthOf(2))
// })

// test('Create a valid Service', async(done) => {
//     const service = {
//         email: "bob@bob.com",
//         password: "123"
//     };
//     try {
//         const count = await Service.count();
//         await request(app).post('/api/services').send(service)
//         const newCount = await Service.count()
//         expect(newCount).toBe(count + 1);
//         done()
//     } catch (err) {
//         // write test for failure here
//         console.log(`Error ${err}`)
//         done();
//     }
// });

// it("email must be an email when submiting", () => {
//     const onMock = jest.fn();
//     const wrapper = mount(<NoAuthPasswordChange)
// })