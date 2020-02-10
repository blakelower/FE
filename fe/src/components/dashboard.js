import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Dashcard from "./Dashcard";
import Footer from "./footer";


export default function Dashboard() {
  const [equip, setEquip] = useState([]);

  useEffect(() => {
    axios
      .get("https://use-my-tech-stuff-eu.herokuapp.com/api/equipments")
      .then(response => {
        console.log(response.data);
        setEquip(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <nav className="pa3 pa4-ns">
        <Link
          to="/"
          className="link dim black b f6 f5-ns dib mr3"
          href="#"
          title="Home"
        >
          Rent Tech
        </Link>
        <Link
          to="/"
          className="link dim gray    f6 f5-ns dib mr3"
          href="#"
          title="Home"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="link dim gray    f6 f5-ns dib mr3"
          href="#"
          title="About"
        >
          About
        </Link>
        <Link
          to="pricing"
          className="link dim gray    f6 f5-ns dib mr3"
          href="#"
          title="Store"
        >
          Pricing
        </Link>
        <Link
          to="/works"
          className="link dim gray    f6 f5-ns dib"
          href="#"
          title="Contact"
        >
          How it Works
        </Link>
      </nav>
      <div>
        {equip.map((equips, id) => {
          return <Dashcard key={id} equips={equips} />;
        })}
      </div>
    </div>
  );
}
