import { createContext } from "react";

export const initialUserContext = {
  token: "",
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
};

const UserContext = createContext();

export default UserContext;
