import { createContext } from "react";

export const initialUserContext = {
  user: {
    email: "",
    firstName: "",
    surname: "",
    zipCode: "",
    city: "",
    phoneNumber: "",
    socialSecurityNumber: "",
    bookmarkedQueries: [],
    bookmarkedHotels: [],
  },
  loggedIn: false,
};

const UserContext = createContext(initialUserContext);

export default UserContext;
