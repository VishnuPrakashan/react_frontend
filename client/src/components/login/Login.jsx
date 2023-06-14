import React from 'react'
import './Login.css'
import {AiOutlineEye} from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
        <div className="nav">
        <span className="text">Don't have an account?</span>
        <Link to={"/signup"}><button typeof="submit" className="btn2">Sign Up</button></Link>
        </div>
      <div className="container">
        <form action="/" id="form">
          <h1>Welcome back!</h1>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="pswd">Password</label>
          <input type="password" id="pswd" />
          <AiOutlineEye className="icon-pswd"/>

          <div className='checkbox'>
              <input type="checkbox" name="checkbox" id="checkbox"/>
              <label htmlFor="checkbox">Remember me</label>
          </div>
          <button type="submit" className="btn3">Login</button>
        </form>
        
      </div>
        <div className='forgot'><a href="">Forgot your password?</a></div>
        <div className="circle"></div>
    </div>
  )
}

export default Login