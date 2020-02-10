import React from "react";
import petar from "../images/petar.jpg";
import blake from "../images/blake.jpg";
import eoin from "../images/eoin.jpg";
import john from "../images/john.jpg";
import max from "../images/max.png";

function About() {
  return (
    <header class="tc ph4">
      <h1 class="f3 f2-m f1-l fw2 black-90 mv3">Meet the Team</h1>
      <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
        The creators behind the beauty
      </h2>
      <main class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 flex flex-wrap justify-between">
        <div class="tc">
          <img
            src={petar}
            class="br-100 h4 w4 dib ba b--black-05 pa2"
            title="Photo of a kitty staring at you"
            alt=""
          />
          <h1 class="f3 mb2">Petar Vlaisavljevic</h1>
          <h2 class="f5 fw4 gray mt0">Team Lead</h2>
        </div>
      </main>
      <main class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 flex flex-wrap justify-between">
        <div class="tc">
          <img src={blake} class="br-100 h4 w4 dib ba b--black-05 pa2" alt=""/>
          <h1 class="f3 mb2">Blake Lower</h1>
          <h2 class="f5 fw4 gray mt0">React Front End</h2>
        </div>
      </main>
      <main class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 flex flex-wrap justify-between">
        <div class="tc">
          <img src={eoin} class="br-100 h4 w4 dib ba b--black-05 pa2" alt="" />
          <h1 class="f3 mb2">Eoin Lynch</h1>
          <h2 class="f5 fw4 gray mt0">React Front End</h2>
        </div>
      </main>
      <main class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
          <img src={john} class="br-100 h4 w4 dib ba b--black-05 pa2"  alt=""/>
          <h1 class="f3 mb2">John Afolabi</h1>
          <h2 class="f5 fw4 gray mt0">Node.js Express Backend</h2>
        </div>
      </main>
      <main class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        <div class="tc">
          <img
            src={max}
            class="br-100 h4 w4 dib ba b--black-05 pa2"
            title="Photo of a kitty staring at you"
            alt=""
          />
          <h1 class="f3 mb2">Max Beard</h1>
          <h2 class="f5 fw4 gray mt0">Node.js Express Backend</h2>
        </div>
      </main>
    </header>
  );
}
export default About;
