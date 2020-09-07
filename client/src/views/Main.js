import React from "react";
import MyBookings from "../components/MyBookings/MyBookings"

import LoginModal from "../components/modals/LoginModal";

const Main = () => {
  return <div>
    Index Page
    <LoginModal />
    <MyBookings />
  </div>;
};

export default Main;
