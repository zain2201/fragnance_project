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
              src="images/Product1.jpeg"
              text="Attar Hiba"
              path="/services"
            />
            <CardItem
              src="images/Product2.jpeg"
              text="Attar Abdullah"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Product3.jpeg"
              text="Attar Aiza"
              path="/services"
            />
            <CardItem
              src="images/Product4.jpeg"
              text="Attar Aisha"
              path="/products"
            />
            <CardItem
              src="images/Product5.jpeg"
              text="Attar Amaira"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
