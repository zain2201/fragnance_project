import React from "react";
import "../../App.css";
import { GiDelicatePerfume } from "react-icons/gi";
import Footer from "../Footer";
export default function Products() {
  return (
    <div>
      <div className="products">
        <h1 className="">PRODUCTS</h1>
        <p>Explore our Fragrances from the perfume Capital of India</p>
      </div>
      <div className="product-list-1">
        <div className="product-list">
          <ul>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Hiba Shamama</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Abdullah Shamama</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Hina Rooh</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Gulab Rooh kewra</span>
            </li>
          </ul>
        </div>
        <div className="product-list-image">
          <img
            className="product-list-image-item"
            src="/images/Product1.jpg"
            alt="Product"
          ></img>
        </div>
      </div>
      <div className="product-list-1">
        <div className="product-list-image">
          <img
            className="product-list-image-item"
            src="/images/Product2.jpg"
            alt="Product"
          ></img>
        </div>
        <div className="product-list">
          <ul>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Attar Gulab</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Attar kewra</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Attar Mitti</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Gulhina</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-list-1">
        <div className="product-list">
          <ul>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Motia</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Majmua</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Choya Nakh</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Pan Masala Compound</span>
            </li>
          </ul>
        </div>
        <div className="product-list-image">
          <img
            className="product-list-image-item"
            src="/images/Product3.jpeg"
            alt="Product"
          ></img>
        </div>
      </div>
      <div className="product-list-1">
        <div className="product-list-image">
          <img
            className="product-list-image-item"
            src="/images/Product4.jpeg"
            alt="Product"
          ></img>
        </div>
        <div className="product-list">
          <ul>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Choya Loban</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Attar Zafran</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Mukhallat</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Attar Oud</span>
            </li>
            <li>
              <GiDelicatePerfume />
              <span className="product-list-item">Rooh Khus</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
