import axios, { Axios } from 'axios';
import './Home/Home.css';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from "../photos/logo.png"
import { TiThMenu } from "react-icons/ti";
import profilepicture from '../photos/profi.png'
import { MdCloseFullscreen } from "react-icons/md";
import MovingComponents from '../Components/UserInterfaceCom/MovingComponents';

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

  // Setting up the initial states using
    // react hook 'useState'
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);
 
    // Fetching crypto data from the API only
    // once when the component is mounted
    useEffect(() => {
        axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=LKR`)
        .then((res) => {
        setCrypto(res.data.coins);
        });
    }, []);

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
            <option className='home-select-button-option' value="Participants">Participants</option>
            <option className='home-select-button-option' value="Logout">Logout</option>
          </select>
          <img className='home-profile-photo' src={profilepicture}/>
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
          <input type="text" placeholder="Search..." onChange={(e) => {setSearch(e.target.value)}}/>
          <table style={{backgroundColor:"white"}}>
            <thead>
              <tr>
                <td>Rank</td>
                <td>Name</td>
                <td>Symbol</td>
                <td>Market Cap</td>
                <td>Price</td>
                <td>Available Supply</td>
                <td>Volume(24hrs)</td>
              </tr>
            </thead>
            <tbody style={{backgroundColor:"white"}}>
              {crypto
                .filter((val) => { 
                  return val.name.toLowerCase().includes(search.toLowerCase());
                  })
                .map((val, id) => {
                  return (
                    <>
                      <tr id={id}>
                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen", margin:"5px"}} className="rank">{val.rank}</td>
                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen", margin:"5px"}} className="logo">
                          <a style={{backgroundColor:"aliceblue"}} href={val.websiteUrl}>
                            <img style={{backgroundColor:"aliceblue", fontSize:"5px",width:"30px",height:"30px"}} src={val.icon} alt="logo" width="30px" />
                          </a>
                          <p style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen", margin:"5px"}}>{val.name}</p>
                        </td>
                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}} className="symbol">{val.symbol}</td>
                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}}>Rs {val.marketCap}</td>
                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}}>Rs {val.price.toFixed(2)}</td>
                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}}>{val.availableSupply}</td>
                        <td style={{backgroundColor:"aliceblue", fontSize:"15px", color:"darkgreen"}}>{val.volume.toFixed(0)}</td>
                      </tr>
                    </>
                  );
                  })}
            </tbody>
          </table>
      </div>
    </div>
  )
}