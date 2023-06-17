import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../context/userContext'

const Home = () => {

   const {user} = useContext(UserContext)
  return (
    <>
        <div className="nav">
        {!!user && (<span className="welcomeText">Hi, {user.name}</span>)}
        <Link to={"/signup"}><button typeof="submit" className="btn2">Logout</button></Link>
        </div>

        <div className="containers">
        <form action="/" id="forms">
            <label htmlFor="name" className="heading">Name your Organization</label>
            <input className='input-field' type="text" id="name" placeholder="enter organization name"/>
        </form>
        <h3>Select your organization Type below</h3>
        <div class="box-container">
             <div  className="box">
                <img className="img1" src="./images/first.png" alt=""/>
             </div>
             <div className="box">
                <img className="img2" src="./images/second.png" alt=""/>
                <p>Construction</p>
             </div>
             <div className="box">
                <img  src="./images/third.png" alt=""/>
                <p>Education</p>
             </div>
             <div className="box">
                <img src="./images/four.png" alt=""/>
                <p>Consultancy</p>
             </div>
             <div className="box">
                <img src="./images/fifth.png" alt=""/>
                <p>Logistics</p>
             </div>
             <div className="box">
                <img src="./images/six.png" alt=""/>
                <p>Manufacturing</p>
             </div>
             <div className="box">
                <img src="./images/seven.png" alt=""/>
                <p>Tourism</p>
             </div>
             <div className="box">
                <img src="./images/eight.png" alt=""/>
                <p>IT</p>
             </div>
        </div>
       <div className='button'> <button className='btn4'>Next</button></div>

       <div className="button">
        <div className='dot dot1'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
        <div className='dot'></div>
       </div>
   </div>
</>
  )
}

export default Home