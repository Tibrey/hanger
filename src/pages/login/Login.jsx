import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import { toast } from "react-toastify";
import { loginApi } from "../../apis/Api";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addUser } from "../../store/userSlice";

const Login = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  //  const navigate = useNavigate();
  //  const dispatch = useDispatch();

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(email, password);

     try {
       loginApi({
         email: email,
         password: password,
       })
         .then((res) => {
           console.log(res.data);

           //dispatch to store
          //  dispatch(addUser(res.data.user));

          //  navigate("/");

           toast.success("User login successfully");
         })
         .catch((err) => {
           toast.error("User login failed");
         });
     } catch (error) {
       toast.error("Login Failed");
     }
   };



  return (
    <>
      <div class="login-box">
        <form className="mt-27">
          <div class="user-box">
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
            <label>Username or Email</label>
          </div>
          <div class="user-box">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <label>Password</label>
          </div>
          <center onClick={handleSubmit}>
            <Link to={"/"}>
              Login
              <span></span>
            </Link>
          </center>
          {/* <button
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </button> */}

          <span class="switch">
            Don't have an account?
            <label for="signup_toggle">
              <Link to={"/register"} className="signup_tog">
                {" "}
                Sign Up{" "}
              </Link>
            </label>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login
