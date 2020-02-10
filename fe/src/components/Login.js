import React, { useState } from "react";
import "../styles/tachyon.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import history from './history';

function Login(props) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const changeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    console.log(user)
    axios.post('https://use-my-tech-stuff-eu.herokuapp.com/api/auth/login', user)
    .then(response => {
      console.log(response)
      history.push('./dashboard')
    }).catch(error => {
      console.log(error)
    }, [])
  };

  return (
    <div className="pa4 black-80">
      <form>
        <label className="db fw4 lh-copy f6">username</label>
        <input
          className="pa2 input-reset ba bg-transparent w-100 measure"
          type="text"
          name="username"
          onChange={changeHandler}
          value={user.username}
          required
        />
        <label className="db fw4 lh-copy f6">Password</label>
        <input
          className="pa2 input-reset ba bg-transparent w-100 measure"
          type="password"
          name="password"
          onChange={changeHandler}
          value={user.password}
          required
        />
        <div className="mt3">
          <Link to="/dashboard">
          <button to ="/dashboard"
            onClick={submitHandler}
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
          >
            Login
          </button>
          </Link>
          <Link to="/register">
            <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6">
              Register Today
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
