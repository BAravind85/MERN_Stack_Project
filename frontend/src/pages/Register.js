import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../Compenents/Layout";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const submitHandle = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOADING", payload: true });
    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return;
    }
    try {
      await axios.post("/api/users/register", {
        username,
        password,
      });
      toast.success("Successfully registered");
      dispatch({ type: "LOADING", payload: false });
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Try Again");
      dispatch({ type: "LOADING", payload: false });
    }
  };
  useEffect(()=>{
    if(localStorage.getItem('userInfo')){
      localStorage.getItem('userInfo');
      navigate('/');
    }
  
  })
  return (
    <Layout>
      <div className="form-container">
        <div className="form-groups">
          <form className="form" onSubmit={submitHandle}>
            <h3 className="form-title">Register</h3>
            <div className="form-group">
              <labal htmlFor="username">Username</labal>
              <input
                type="email"
                className="input"
                id="username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <labal htmlFor="password">Password</labal>
              <input
                type="password"
                className="input"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <labal htmlFor="rpassword">Retype Password</labal>
              <input
                type="password"
                className="input"
                id="rpassword"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button className="book-now">Register</button>
            </div>
            <div className="form-group">
              <p>
                You have an account ?{" "}
                <a href="/login" className="form-link">
                  Here for Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
