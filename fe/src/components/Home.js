import React from "react";
import rent from "../images/rent.png";
import Keyboard from "../images/keyboard.jpg";
import TV from "../images/tv-icon.png";
import Comp from "../images/computer-icon.png";
import Cam from "../images/camera-icon.png";
import Fridge from "../images/fridge-icon.png";
import Audio from "../images/music-note-icon.png";
import Gadge from "../images/gadgets-icon.png";
import Footer from "../components/footer";
import "../styles/tachyon.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="sans-serif">
      <div
        className="cover bg-left bg-center-l"
        style={{ backgroundImage: `url(${Keyboard})` }}
      >
        <div className="bg-black-80 pb5 pb6-m pb7-l">
          <nav className="dt w-100 mw8 center">
            <div className="dtc w2 v-mid pa3">
              <div>
                <img src={rent} alt="not" className="left" />
              </div>
            </div>
            <div className="dtc v-mid tr pa3">
              <Link
                className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                to="/works"
              >
                How it Works
              </Link>
              <Link
                className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
                to="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3"
                to="/about"
              >
                About
              </Link>
              <Link
                to="/login"
                className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba"
              >
                Register
              </Link>
            </div>
          </nav>
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">RENT TECH</h1>
            <h2 className="fw1 f3 white-80 mt3 mb4">
              Borrow Peoples Tech Equiptment, Share with Others
            </h2>
            <Link
              to="/login"
              className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3"
            >
              Start Today
            </Link>
          </div>
        </div>
      </div>
      <div className="tc ph4">
        <h1 class="f3 f2-m f1-l fw2 black-90 mv3">
          Interested in Renting Today?
        </h1>
        <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
          See if there is anything you are interested in
        </h2>
      </div>
      <div className="set">
        <div className="look-through">
          <div className="tv">
            <Link to="/tv">
              <img src={TV} className="icon" alt="/" />
            </Link>
            <p className="sub">TV & Home</p>
          </div>

          <div className="tv">
            <Link to="/computers">
              <img src={Comp} className="icon" alt="/" />
            </Link>
            <p className="sub">Computer & Laptops</p>
          </div>
          <div className="tv">
            <Link to="/cam">
              <img src={Cam} className="icon" alt="/" />
            </Link>
            <p className="sub cam">Cameras</p>
          </div>
          <div className="">
            <Link to="/ipads">
              <img src={Gadge} className="icon" alt="/" />
            </Link>
            <p className="sub">Gadgets & Ipads</p>
          </div>

          <div className="">
            <Link to="/appliances">
              <img src={Fridge} className="icon" alt="/" />
            </Link>
            <p className="sub">Home Appliances</p>
          </div>
          <div className="">
            <Link to="/audio">
              <img src={Audio} className="icon" alt="/" />
            </Link>
            <p className="sub">Audio</p>
          </div>
        </div>
      </div>
      <Footer />
    </header>
  );
}
export default Home;
