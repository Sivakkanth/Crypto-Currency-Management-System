import axios from 'axios';
import '../Home.css';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
  
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
  }

  return (
    <div>
      <main className='m1'>
        <section className='s1'>
            <h2 style={{color:'lightgreen',paddingLeft:"68%",fontSize:"180%"}}>
            ${user.mabalance}
            <select onChange={handleOptionSelect} style={{color:'lightgreen',fontSize:"80%", border:"2px solid #FFFFFF", marginLeft:"10%",width:"50%"}}>
              <option value="Home">{user.firstName}</option>
              <option value="PersonalData">Personal Data</option>
              <option value="Deposit">Deposit</option>
              <option value="Withdrawal">Withdrawal</option>
              <option value="CoinWallet">Coin Wallet</option>
              <option value="Trade">Trade</option>
              <option value="Participants">Participants</option>
              <option value="Logout">Logout</option>
            </select>
            </h2>
        </section>
        <section className='s2'>
          <div className='Homecustombackground1'>
            <h1 data-aos="fade-up" className='homeTitle1'>
              TRADE AND EARN MONEY WITH SAVE CRYPTO CURRENCY COIN
            </h1>
          </div>
        </section>
      </main>    
    </div>
  )
}

export default Home