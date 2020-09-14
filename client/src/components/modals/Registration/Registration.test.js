import React from "react";
import {
  configure,
  shallow,
  mount,
  ShallowWrapper,
  ReactWrapper,
} from "enzyme";
import ReactDOM from "react-dom";

import RegistrationComp from "./RegistrationComp";

it("renders without crashing", () => {
  const Container = document.createElement("Container");
  console.log(Container);
  ReactDOM.render(<RegistrationComp />, Container);
});

describe("Full form test", () => {
  let reactWrapper = ReactWrapper;
  const newUser = {
    email: "",
    firstName: "",
    surname: "",
    street: "",
    zipCode: "",
    city: "",
    country: "",
    phoneNumber: "",
    socialSecurityNumber: "",
    password: "",
    confirmPassword: "",
  };

  beforeEach(() => {
    reactWrapper = mount(<RegistrationComp newUser={newUser} />);
  });

  it("form exists", () => {
    const wrapper = shallow(<RegistrationComp />);
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("Registration children will be render", () => {
    expect(reactWrapper.find("input").length).toBe(11);
    expect(reactWrapper.find("button").length).toBe(1);
  });

  it("First input should be EMPTY", () => {
    const nameInput = reactWrapper.find("input").first();
    expect(nameInput.props().value).toEqual("");
  });

  it("Should have an email field and 2 password field", () => {
    expect(reactWrapper.find('input[type="email"]').length).toEqual(1);
    expect(reactWrapper.find('input[type="password"]').length).toEqual(2);
  });

  it("state should have a name", () => {
    newUser.firstName = "Bob";
    expect(newUser.firstName).toEqual("Bob");
  });
});
