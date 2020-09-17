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
};

const UserContext = createContext(initialUserContext);

export default UserContext;
