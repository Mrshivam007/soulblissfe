import React from "react";
import UserTable from "./UserTable";

const fakeData = [
  {
    id: "0",
    name: {
      name: "Pranay Shukla",
      avatar_url: "",
    },
    phone: "+912558455646",
    email: "pranayshukla496@gmail.com",
    course: "Python",
    location: "Bangalore",
  },
  {
    id: "1",
    name: {
      name: "Pranay Shukla",
      avatar_url: "",
    },
    phone: "+912558455646",
    email: "pranayshukla496@gmail.com",
    course: "Web dev",
    location: "Pune",
  },
  {
    id: "2",
    name: {
      name: "Pranay Shukla",
      avatar_url: "",
    },
    phone: "+912558455646",
    email: "pranayshukla496@gmail.com",
    course: "C++",
    location: "Bangalore",
  },
  {
    id: "3",
    name: {
      name: "Pranay Shukla",
      avatar_url: "",
    },
    phone: "+912558455646",
    email: "pranayshukla496@gmail.com",
    course: "UI/UX",
    location: "Bangalore",
  },
];

const Students = () => {
  return <UserTable data={fakeData} />;
};

export default Students;
