import React, { useEffect, useState } from "react";
import axios from "axios";
import './Register.css'
import { Link, useParams, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [users, setusers] = useState([]);
  const [correctuser,setcorrectuser]= useState();
  const [loginUserName, setloginUserName] = useState();
  const [loginPassword, setloginPassword] = useState();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setusers(result.data);
  };

  const handleClick = () => {
    const foundUser = users.find((user) => user.userName === loginUserName && user.password === loginPassword);
  
    if (foundUser) {
      setcorrectuser(foundUser);
      navigate(`/Homepage/${foundUser.id}`);
    }
  };

  return (
    <div className='b1'>
      <form style={{backgroundColor:'transparent'}}>
        <h3 className='Header'>LOGIN</h3>
        <div className='d2'>
          <label className="label" htmlFor="username">User Name</label>
          <input type="username"
            placeholder="Enter UserName"
            className="form-control"
            name="loginUserName"
            value={loginUserName}
            onChange={(e) => setloginUserName(e.target.value)}/>
          <label className="label" htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            name="loginPassword"
            value={loginPassword}
            onChange={(e) => setloginPassword(e.target.value)}
          />

          <main className="mai">
            <input className='checkmark' style={{marginLeft:"30px"}}
              type="checkbox" id="check"/>
            <label className="label" htmlFor="check">
              Remember me
            </label>
          </main>
          <div style={{margin:"10px",paddingLeft:"50px", paddingRight:"50px"}} className="mai">
            <button to={`/Homepage/:id`} style={{margin:"20px"}}
              className="btn btn-outline-light mx-4"
              onClick={handleClick}>
              SignIn
            </button>
            <Link type='close' to={"/"} className='btn btn-outline-danger mx-4'>
              Close
            </Link>
          </div>
          <main style={{marginLeft:"40px", textAlign:"center"}} className="mai">
            <label style={{paddingLeft:"20px"}} className="label" htmlFor='Check'>
              If you can't remember  <a href={``} style={{color:"yellowgreen", backgroundColor:"transparent"}}>Forgot Password?</a>
            </label>
            <label style={{paddingLeft:"50px"}} className="label" htmlFor='Check'>
              Don't have an account <a href={`/signup/:id`} style={{color:"lightyellow", backgroundColor:"transparent"}}>SIGN UP</a>
            </label>
          </main>
        </div>
      </form>
    </div>
  );
}

export default Login