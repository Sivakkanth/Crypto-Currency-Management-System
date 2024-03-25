import axios from 'axios';
import './Register.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate=useNavigate()
  const[user,setUser]=useState({
    userName:"",
    password:"",
    firstName:"",
    country:""
  })
  const{userName, password,firstName,country}=user;
  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user",user);
    navigate("/Login/:id");
  }

  return (
    <div className='b1'>
      <h3 className="Header">
        Ready to get free access to the world of investing?
      </h3>
      <h6 className="SubHeader">
        Create an account to start using the platform
      </h6>
      <form style={{backgroundColor:"transparent"}} onSubmit={(e)=>onSubmit(e)}>
        <div className='d1'>
          <label className="label" htmlFor='UserName'>
            User Name
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Username' name='userName'
          value={userName} onChange={(e)=>onInputChange(e)}/>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Password' name='password'
          value={password} onChange={(e)=>onInputChange(e)}/>
          <label htmlFor='firstName' className='label'>
            FirstName
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Firstname' name='firstName'
          value={firstName} onChange={(e)=>onInputChange(e)}/>
          <label htmlFor='country' className='label'>
            Country of Residence
          </label>
          <input type={'text'} className='form-control'
          placeholder='Enter Your Counrty' name='country'
          value={country} onChange={(e)=>onInputChange(e)}/>
            <label style={{padding:"20px", textAlign:"center"}} htmlFor='Check' className='label'>
              I agree to the <b style={{backgroundColor:'transparent', color:"yellow"}}>Terms</b> and <b style={{backgroundColor:'transparent', color:"yellow"}}>Condition</b>.
            </label>
          <div style={{margin:"10px",paddingLeft:"50px", paddingRight:"50px"}} className="mai">
            <button style={{margin:"20px", backgroundColor:"lightblue", color:"ThreeDDarkShadow"}} type='Submit' className='btn btn-outline-light mx-5'>
              Submit
            </button>
            <Link style={{ backgroundColor:"lightcoral", color:"darkblue"}} type='close' to={"/"} className='btn btn-outline-danger mx-0'>
              Close
            </Link>
            <label className="label" style={{paddingTop:"15px"}} htmlFor='Check'>
              Already have an account? <a href={"/Login/:id"} style={{color:"lightyellow", backgroundColor:"transparent", paddingTop:"15px",paddingLeft:"5px"}}>SIGN IN</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register;