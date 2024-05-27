import React, { useEffect, useState } from "react";
import axios from "axios";
import './Deposit/Deposit.css'
import { Link, useParams, useNavigate } from "react-router-dom";
import logo from '../photos/logo.png'

export default function Withdrawal() {
  const[user,setUsers]=useState({
    userName:"",
    password:"",
    firstName:"",
    country:"",
    anumber:"",
    cabalance:"",
    mabalance:""
  });
  const {id}=useParams();
  let navigate=useNavigate();

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };

  //Withdrawal
  const valuefromdatabase = user.mabalance;
  const[withdrawalvalue,setwithdrawalvalue]=useState('');
  const [sum,setsum]=useState(null);
  const [message, setMessage]=useState('');

  const handlewithdrawal=()=>{
    const amount = parseFloat(withdrawalvalue);
    if(isNaN(valuefromdatabase)||valuefromdatabase<=0||valuefromdatabase<amount){
      setMessage('Please enter a valid positive amount.');
      return;
    }
    const newBalance = valuefromdatabase-amount;
    axios.put(`http://localhost:8080/user/${id}`,{
      mabalance:newBalance,
      id:user.id,
      userName:user.userName,
      password:user.password,
      firstName:user.firstName,
      country:user.country,
      anumber:user.anumber,
      cabalance:user.cabalance
    })
    .then(response =>{
      setsum(newBalance);
      setMessage(`withdrawal of $${amount} was successful. New balance: $${newBalance}`);
      setwithdrawalvalue('');
    })
    .catch(error=>{
      setMessage('Error updating the balance. Please try again.');
    });
  };
  return (
<div className='deposit-b1'>
    <img className="logo-deposit" alt='logo' src={logo}/>
      <form className="deposit-form">
        <h3 className='deposit-Header'>withdrawal</h3>
        <div  className='d2'>
          <label style={{paddingLeft:"70px"}} className="label" htmlFor="username">Available Balance : 
            <b style={{backgroundColor:'transparent',paddingLeft:"30px", color:"lightgreen", fontSize:"20px"}}>${user.mabalance}</b>
            </label>
            <div style={{color:"lightblue", fontSize:"20px", marginTop:"5px", display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <p style={{margin:'0px'}}>select Payment Method</p>
            <select style={{backgroundColor:'black', margin:'0px', padding:'5px', width:'auto'}} id="servicequality">
              <option>People's Bank</option>
              <option>BOC</option>
            </select>
            </div>
          <label style={{marginTop:"30px"}} className="label" htmlFor="username">Enter withdrawal Amount : </label>
          <div style={{backgroundColor:"transparent",color:"lightgreen", paddingLeft:"20px", fontSize:"20px", marginTop:"20px"}}
           className="mia">$
            <input type="number" style={{margin:"10px", backgroundColor:"silver", width:"200px", border:"5px solid green", borderRadius:"15px"}}
              placeholder="Enter the withdrawale amount"
              value={withdrawalvalue} onChange={(e)=>setwithdrawalvalue(e.target.value)}/>
            <select id="servicequality">
              <option>USD</option>
              <option>LKR</option>
          </select>
            </div>
            <div>
            <p style={{color:"#11AC15", fontSize:"13px", textAlign:"center"}}>{message}</p>
            </div>
          <div style={{display:"flex", flexDirection:"row", alignItems:'center',justifyContent:'space-evenly',margin:"10px"}}>
            <Link style={{background:"darkblue",margin:"20px"}} type='close' className='btn btn-outline-light' to={`/Homepage/${id}`}>
              Back
            </Link>
            <button style={{background:"darkgreen"}} type="Submit" onClick={handlewithdrawal} className='btn btn-outline-light'>
              withdrawal
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}