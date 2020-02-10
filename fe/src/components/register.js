import React, { useState } from "react";
import "../styles/tachyon.css";
import Footer from "./footer";
import axios from "axios";
import history from './history';

const Register = props => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    account_type: "owner"
  });
  const changeHandler = event => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(user)
    axios.post('https://use-my-tech-stuff-eu.herokuapp.com/api/auth/register', user)
    .then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    }, [])
  };
  return (
    <div className="pa4 black-80">
      <form>
        <h1 className="sans-serif">Register Today</h1>
        <div className="mt3 center">
          <label className="db fw4 lh-copy f">Username</label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure"
            type="text"
            name="username"
            onChange={changeHandler}
            value={user.username}
            required
          />
          <div className="mt3">
            <label className="db fw4 lh-copy f">Password</label>
            <input
              className="pa2 input-reset ba bg-transparent w-100 measure"
              type="password"
              name="password"
              onChange={changeHandler}
              value={user.password}
              required
            />
            <div>
              <select onChange={changeHandler} required>
                <option value="owner">Owner</option>
                <option value="renter">Renter</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt3">
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
            type="submit"
            onClick={handleSubmit}>
            Join
          </button>
        </div>
        <Footer />
      </form>
    </div>
  );
};
export default Register;