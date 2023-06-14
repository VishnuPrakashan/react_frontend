import React from 'react'
import './Signup.css'
import {AiOutlineEye} from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
         <div className="nav">
        <span className="text">Already have an account?</span>
        <Link to={"/home"}><button typeof="submit" className="btn">Login</button></Link>
      </div>
      <div className="container">
        <form action="/" id="form">
          <h1>Let's go!</h1>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="pswd">Choose Password</label>
          <input type="password" id="pswd" />
          <AiOutlineEye className="icon-pswd"/>

          <button type="submit" className="btn1">Sign up</button>
        </form>
        
      </div>
        <div className="circle"></div>
    </div>
  )
}

export default Signup