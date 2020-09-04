import "@testing-library/jest-dom/extend-expect";
import ReactDOM from 'react-dom'
import LoginView from "../../views/Login";
import React from "react";

it ('renders without crashing', () => {
    const Container = document.createElement('Container');
    ReactDOM.render(<LoginView />, Container)
});

it  ('store email when click Login-button', () => {
    
});