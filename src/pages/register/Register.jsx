import React from 'react'
import { Link } from 'react-router-dom';
import './register.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerApi } from '../../apis/Api';
const Register = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");

    const handleFname = (e) => {
      setFname(e.target.value);
    };

    const handleLname = (e) => {
      setLname(e.target.value);
    };

    const handleEmail = (e) => {
      setEmail(e.target.value);
    };

    const handlePass = (e) => {
      setPass(e.target.value);
    };

    const handlePass2 = (e) => {
      setPass2(e.target.value);
    };

    // const toastR = (e) => {
    //   toast.success("User registration successfully");
    // };

    //handle submit
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(fname, lname, email, pass, pass2);

      try {
        registerApi({
          fname: fname,
          lname: lname,
          email: email,
          password: pass,
          password2: pass2,
        })
          .then((res) => {
            toast.success("User registration successfully");
          })
          .catch((err) => {
            toast.error("User registration failed");
          });
      } catch (error) {
        toast.error("Error in registration");
      }
    };

  return (
    <>
      <div class="container">
        <input id="signup_toggle" type="checkbox" />
        <form class="form">
          <div class="form_front">
            <div class="form_details">SignUp</div>
            <input
              onChange={handleFname}
              type="text"
              class="input"
              placeholder="Firstname"
            />
            <input
              onChange={handleLname}
              type="text"
              class="input"
              placeholder="Lastname"
            />
            <input
              onChange={handleEmail}
              type="email"
              class="input"
              placeholder="Email"
            />
            <input
              onChange={handlePass}
              type="password"
              class="input"
              placeholder="Password"
            />
            <input
              onChange={handlePass2}
              type="password"
              class="input"
              placeholder="Confirm Password"
            />
            <Link to={"/login"}>
              <button
                type="submit"
                class="btn btn-primary btn-block mb-4"
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register
