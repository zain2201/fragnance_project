import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Feel the Royal essence with our Royal Fragnances
        </p>
        {/* <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          {/* <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div> */}
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">
              Contact: +919415147341
              <br />
              +917007899657
            </Link>
            {/* <Link to="/">Support</Link> */}
            <Link to="/">
              Visit: Behind Lala Shyam Lal School, Qazi Tola,
              Kannauj(U.P)-209725
            </Link>
            {/* <Link to="/">Sponsorships</Link> */}
          </div>
        </div>
        <div className="footer-link-wrapper">
          {/* <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div> */}
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a target="_blank" href="https://www.facebook.com/mushi.bari">
              instagram
            </a>
            <a target="_blank" href="https://www.facebook.com/mushi.bari">
              facebook
            </a>
            {/* <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link> */}
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              TODAY FRAGRANCE
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Today Fragrance © 2022</small>
          <div class="social-icons">
            {/* <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
            </Link> */}
            <a
              class="social-icon-link facebook"
              target="_blank"
              href="https://www.facebook.com/mushi.bari"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            {/* <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
