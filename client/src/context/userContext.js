import { createContext } from "react";

export default createContext({
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
});
