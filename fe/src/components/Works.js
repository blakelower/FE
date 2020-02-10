import React from "react";
import Footer from "../components/footer";
import rent from "../images/rent.png";
import { Link } from "react-router-dom";

function Works() {
  return (
    <article class="pa3 pa5-ns">
      <Link to="/">
        <img src={rent} alt="not" className="right" />
      </Link>
      <h1 class="f3 f2-m f1-l">How It Works?</h1>
      <p class="measure lh-copy">
        This is a frequently asked question we get here at Rent Tech.
        Essentially how this works is you rent the product through our website
        and then are able to meet the person to pick up the product for the
        remaining amount of time. Payments can be cash or Paypal. You must give
        the product back after the certain amount of days that you rented the
        product.
      </p>
      <p class="measure lh-copy">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <Footer />
    </article>
  );
}
export default Works;
