import React from "react";

function Nav() {
  return (
    <div className="navbar-container">
      <div>
        <h1>LOGO</h1>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "100px"}}>
         <ul>
        <li>Home</li>
        <li>About</li>
        <li>Gallary</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
      <div>
        <button>Let's Talk</button>
      </div>
      </div>
     
    </div>
  );
}

export default Nav;
