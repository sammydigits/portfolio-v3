import React, { Component } from "react";

//footer can be a stateless functional component, it doesnt do much
const Footer = () => {
  //get the current date and extract the year
  const dt = new Date();
  return (
    <footer className="footer">
      <p>&copy; 1996 - {dt.getFullYear()} Sam Thompson</p>
    </footer>
  );
};

export default Footer;
