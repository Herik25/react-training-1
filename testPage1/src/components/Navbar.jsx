import React from "react";

function Navbar() {
  return (
    <header>
      <a href="#" class="logo animation-slideRight">
        <span>My</span>Portfolio_
      </a>
      <ul>
        <li>
          <a href="#home" id="home">
            Home
          </a>
        </li>
        <li>
          <a href="#about" id="about" class="pagelink">
            About
          </a>
        </li>
        <li>
          <a href="#work" id="work">
            Work
          </a>
        </li>
        <li>
          <a href="#contact" id="contact">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
