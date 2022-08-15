import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/images/background.jpg" alt="not found"></img>
      <h1>TODAY FRAGRANCE</h1>
      <p>Find Your Perfect Fragrance!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          BROWSE PRODUCTS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
