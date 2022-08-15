import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Fragrances!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Product4.jpeg"
              text="Hiba Shamama"
              path="/products"
            />
            <CardItem
              src="images/Product5.jpeg"
              text="Abdullah Shamama"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Product3.jpeg"
              text="Hina Rooh"
              path="/products"
            />
            <CardItem
              src="images/Product1.jpg"
              text="Attar Gulab"
              path="/products"
            />
            <CardItem
              src="images/Product2.jpg"
              text="Attar Mitti"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
