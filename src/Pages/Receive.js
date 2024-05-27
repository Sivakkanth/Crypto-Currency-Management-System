import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import logo from '../photos/logo.png'
import './Deposit/Deposit.css'

export default function Receive() {
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

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers = async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };

  //Deposit
  const valuefromdatabase = user.cabalance;
  const[depositvalue,setdepositvalue]=useState('');
  const [sum,setsum]=useState(null);
  const [message, setMessage]=useState('');

  const handleDeposit=()=>{
    const amount = parseFloat(depositvalue);
    if(isNaN(amount)||amount<=0){
      setMessage('Please enter a valid positive amount.');
      return;
    }
    const newBalance = valuefromdatabase+amount;
    axios.put(`http://localhost:8080/user/${id}`,{
      cabalance:newBalance,
      id:user.id,
      userName:user.userName,
      password:user.password,
      firstName:user.firstName,
      country:user.country,
      anumber:user.anumber,
      mabalance:user.mabalance
    })
    .then(response =>{
      setsum(newBalance);
      setMessage(`Deposit of ${amount} was successful. New balance: ${newBalance}`);
      setdepositvalue('');
    })
    .catch(error=>{
      setMessage('Error updating the balance. Please try again.');
    });
  };
    
  return (
    <div className='deposit-b1'>
      <img className="logo-deposit" alt='logo' src={logo}/>
      <form className="deposit-form">
        <h3 className='deposit-Header'>RECEIVE</h3>
        <div className='d2'>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <label className="label" htmlFor="username">Available Balance : 
              <b style={{backgroundColor:'transparent',paddingLeft:"30px", color:"lightgreen", fontSize:"20px"}} >{user.cabalance}</b>
            </label>
            <select id="servicequality">
              <option>BTC</option>
              <option>ETH</option>
              <option>USDT</option>
              <option>BNB</option>
              <option>LTC</option>
              <option>TRON</option>
            </select>
          </div>
          <div style={{marginTop:'20px',display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
            <label style={{color:'lightblue', fontWeight:'bold'}} className="label" htmlFor="username">Paste Receiver Wallet Address : </label>
            <input type="text" style={{margin:"10px", backgroundColor:"silver", width:"100%", border:"3px solid blue", borderRadius:"5px"}}
              placeholder="ssdjghusdshbajbhdadhjbdjhigdsjowiueuhdiuehiubugyfyt"/>
          </div>
          <label style={{marginTop:"20px"}} className="label" htmlFor="username">Enter Receive Amount : </label>
          <div style={{backgroundColor:"transparent",color:"lightgreen", paddingLeft:"20px", fontSize:"20px", marginTop:"5px"}}
           className="mia">
            <input type="number" style={{margin:"10px", backgroundColor:"silver", width:"200px", border:"5px solid green", borderRadius:"15px"}}
              placeholder="Enter the Receive coin"
              value={depositvalue} onChange={(e)=>setdepositvalue(e.target.value)}/>
            <select id="servicequality">
              <option>BTC</option>
              <option>ETH</option>
              <option>USDT</option>
              <option>BNB</option>
              <option>LTC</option>
              <option>TRON</option>
          </select>
            </div>
          <div>
            <p style={{color:"#11AC15", fontSize:"13px", textAlign:"center"}}>{message}</p>
            </div>
          <div style={{margin:"10px", display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <Link style={{margin:"20px", backgroundColor:"lightblue", color:"ThreeDDarkShadow"}} type='close' className='btn btn-outline-light mx-4' to={`/CoinWallet/${id}`}>
              Back
            </Link>
            <button style={{margin:"10px", backgroundColor:"lightcoral", color:"darkblue"}} type="Submit" onClick={handleDeposit} className='btn btn-outline-danger mx-4'>
              RECEIVE
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}