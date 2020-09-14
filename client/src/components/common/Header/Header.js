import React from "react";
import LoginModal from "../../modals/LoginModal"
import MyBookings from "../../MyBookings/MyBookings"

const Header = () => {
  return <header>
    <LoginModal />
    <MyBookings />
  </header>;
};

export default Header;
