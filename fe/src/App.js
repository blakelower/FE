import React from "react";
import { Route} from "react-router-dom";
import "./App.css";
import Register from "./components/register";
import Home from "./components/Home";
import Login from "./components/Login";
import Works from "./components/Works";
import pricing from "./components/pricing";
import about from "./components/About";
import dashboard from "./components/dashboard";
import cam from './components/cam';
import tv from './components/tv';
import computers from './components/computers';
import ipad from './components/ipads';
import appliances from './components/appliances';
import audio from './components/audio';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/works" component={Works} />
      <Route path="/pricing" component={pricing} />
      <Route path="/about" component={about} />
      <Route path="/dashboard" component={dashboard} />
      <Route path="/cam" component={cam} />
      <Route path="/tv" component={tv} />
      <Route path="/computers" component={computers} />
      <Route path="/ipads" component={ipad} />
      <Route path="/appliances" component={appliances}/>
      <Route path="/audio" component={audio}/>
    </div>
  );
}

export default App;
