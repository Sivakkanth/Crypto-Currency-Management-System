import axios, { Axios } from 'axios';
import './Home/Home.css';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from "../photos/logo.png"
import { TiThMenu } from "react-icons/ti";
import profilepicture from '../photos/profi.png'
import { MdCloseFullscreen } from "react-icons/md";
import MovingComponents from '../Components/UserInterfaceCom/MovingComponents';
import CryptoCurrencyInfo from '../Components/Coinwallet/CryptoCurrencyInfo';

export default function CoinWallet() {
  const [openButtons, setOpenButtons] = useState(false)
  const [user,setUser]=useState({
    firstName:"",
    userName:"",
    mabalance:""
  })
  const {id}=useParams();
  useEffect(()=>{
    loadUser();
  },[]);
  const loadUser=async ()=>{
    const result =await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  
  function handleOptionSelect(event) {
    const selectedOption = event.target.value;
    // Redirect to the URL associated with the selected option
    if (selectedOption === "Home") {
      window.location.href = `/Homepage/${id}`;
    } 
    else if (selectedOption === 'PersonalData') {
      window.location.href = `/Personal/${id}`;
    }
    else if (selectedOption === 'Deposit') {
      window.location.href = `/Deposit/${id}`;
    }
    else if (selectedOption === 'Withdrawal') {
      window.location.href = `/Withdrawal/${id}`;
    }
    else if (selectedOption === 'CoinWallet') {
      window.location.href = `/CoinWallet/${id}`;
    }
    else if (selectedOption === 'Trade') {
      window.location.href = 'https://www.facebook.com';
    }
    else if (selectedOption === 'Participants') {
      window.location.href = '/Users/:id';
    }
    else if (selectedOption === 'Logout') {
      window.location.href = '/';
    }
  };

  return (
    <div className='home-main'>
      <div className='home-m1'>
        <img className='logo-home' src={logo} alt="Crypto Currency Wallet"/>
        <div className='home-menu-button' onClick={()=>setOpenButtons(true)}>
          <p className='home-balance'>${user.mabalance}.00</p>
          <TiThMenu onClick={()=>setOpenButtons(true)} style={{ color: 'black', fontSize: '24px' }}/>
        </div>
        <div className='home-buttons'>
        <p className='home-balance'>${user.mabalance}.00</p>
          <select onChange={handleOptionSelect} className='home-select-button'>
            <option className='home-select-button-option' value="Home">{user.firstName}</option>
            <option className='home-select-button-option' value="PersonalData">Personal Data</option>
            <option className='home-select-button-option' value="Deposit">Deposit</option>
            <option className='home-select-button-option' value="Withdrawal">Withdrawal</option>
            <option className='home-select-button-option' value="CoinWallet">Coin Wallet</option>
            <option className='home-select-button-option' value="Trade">Trade</option>
            <option className='home-select-button-option' value="Participants">LeaderBoard</option>
            <option className='home-select-button-option' value="Logout">Logout</option>
          </select>
          <img className='home-profile-photo' alt='profile' src={profilepicture}/>
        </div>
      </div>
      <div style={{height:'100px'}}>
        <nav>
          <ul className="menuItems">
            <li style={{backgroundColor:"transparent", paddingBottom:"0px"}}><a style={{backgroundColor:"transparent"}} href={`/Send/${id}`} data-item='SEND'>SEND</a></li>
            <li style={{backgroundColor:"transparent"}}><a style={{backgroundColor:"transparent"}} href={`/Receive/${id}`} value="RECIEVE" data-item='RECIEVE'>RECIEVE</a></li>
            <li style={{backgroundColor:"transparent"}}><a style={{backgroundColor:"transparent"}} href={`/Swap/${id}`} value="SWAP" data-item='SWAP'>SWAP</a></li>
            <li style={{backgroundColor:"transparent"}}><a style={{backgroundColor:"transparent"}} href={`/Coinas/${id}`} value="COIN" data-item='COIN'>COIN</a></li>
            <li style={{backgroundColor:"transparent"}}><a style={{backgroundColor:"transparent"}} href={`/Cashas/${id}`} value="CASH" data-item='CASH'>CASH</a></li>
            <div  style={{border:"3px solid white", borderRadius:"20px",padding:"10px",margin:'25px',height:'80%',color:'lightgreen', backgroundColor:"#4C275B", fontSize:"120%"}}>
            <h5>Coin Balance</h5>
            <h4 style={{color:'lightgreen', backgroundColor:"transparent", textAlign:"center"}}>${user.cabalance}</h4>
            </div>
          </ul>
        </nav>
        </div>
        <div className='Homecustombackground4'>
          <div className='home-background'>
            <p className='homeTitle1'>
              EXCHANGE AND SAVE YOUR CRYPTO CURRENCIES COINS
            </p>
          </div>
        </div>
        <div className="cryptolist">
          <h1 style={{textAlign:'center'}}>All Cryptocurrencies</h1>
          <input type="text" placeholder="Search..."/>
          <CryptoCurrencyInfo/>
      </div>
    </div>
  )
}