import React from "react";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          {" "}
          welcome to my <span style={{ fontWeight: 900 }}>challenge</span>{" "}
          website
        </h1>
        <button>Explore and Learn</button>
      </div>
      <div className="image-gif">
        <img width="550px" src="/image1.gif" alt="gif" />
      </div>
    </div>
  );
}

export default Hero;
