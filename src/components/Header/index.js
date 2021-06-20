import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
       Personnel can be sorted by using the search bar or clicking on Name, Phone, Email, or DOB.
      </p>
    </header>
  );
};

export default Header;