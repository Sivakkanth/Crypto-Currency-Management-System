import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import './Userinterface.css'
import { FaApple } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io";
import { FaChrome } from "react-icons/fa";
import CashCecorationInformation from '../../Components/UserInterfaceCom/CashCecorationInformation'
import VideoFeature from '../../Components/UserInterfaceCom/VideoFeature';
import ImageFeatureDiscription from '../../Components/UserInterfaceCom/ImageFeatureDiscription';
import WebsiteUses from '../../Components/UserInterfaceCom/WebsiteUses';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcQuestions } from "react-icons/fc";
import Feature from '../../photos/Feature1.png'
import Feature1 from '../../photos/Feature2.png'
import Feature2 from '../../photos/Feature.png'
import videofeature1 from '../../videos/featurevideo.mp4'
import Steps from '../../Components/UserInterfaceCom/Steps';
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi";

export default function Userinterface() {
  const Banks=[
    {id:1, title:'People', icon:'p1'},
    {id:2, title:'BOC', icon:'p1'},
    {id:3, title:'Commercial', icon:'p1'},
    {id:4, title:'NTB', icon:'p1'},
    {id:5, title:'NDB', icon:'p1'},
    {id:6, title:'LOLC', icon:'p1'},
    {id:7, title:'Payeer', icon:'p1'},
    {id:8, title:'Frimi', icon:'p1'},
    {id:9, title:'HNB', icon:'p1'},
    {id:10, title:'NSB', icon:'p1'},
  ];
  return (
    <div className='userinterface-class'>
      <Header/>
      <div className='userinterface-information-container'>
        <div className='userinterface-information-container1'>
          <p className='main-head'>INSTANT ACCESS TO INVERSTING, ANYTIME AND ANYWHERE</p>
          <p className='submain-head'>Investing has never been easier. Everything you are looking for in an ultimate investment platform — on the device of your choice.</p>
          <Link to="/signup/:id" className='main-button'>GET START FOR FREE</Link>
          <div className='userinterface-icons'>
            <FaApple size='40px'  style={{marginLeft:'5vw'}}/>
            <IoLogoWindows size='40px' style={{marginLeft:'5vw'}}/>
            <FaChrome size='40px' style={{marginLeft:'5vw'}}/>
          </div>
        </div>
      </div>
      <div className='userinterface-cash-informations'>
        <CashCecorationInformation inform1={"$10 minimum Withdrawal"} inform2={"No fees when you make a Withdrawal"}/>
        <CashCecorationInformation inform1={"$10 minimum Deposit"} inform2={"No fees when you make a Deposit"}/>
        <CashCecorationInformation inform1={"$10 minimum Investment"} inform2={"It's easy to get started tradingwith small amount"}/>
      </div>
      <div className='Important-of-Website'>
        <p className='Important-of-Website1'>Why invest with crypto currencies wallet?</p>
        <div className='Important-of-Website2'>
          <WebsiteUses icon={<FaMoneyBillTrendUp color='green' fontSize={"50px"}/>} title={"Earn Unlimited Money"} description={"You can able to earn unlimited money by trading on 24 hour per day and You can save the money on it."}/>
          <WebsiteUses icon={<FcMoneyTransfer color='green' fontSize={"50px"}/>} title={"Convenient Withdrawal"} description={"Withdraw your money in an instant using a wide range of available payment systems."}/>
          <WebsiteUses icon={<FcQuestions color='green' fontSize={"50px"}/>} title={"Support Instruction"} description={"If you want to any clarification and more information, You can able to get information on “Build Your Investing Foundation” tab."}/>
        </div>
      </div>
      <div className='Important-Feature'>
        <p className='Important-Feature1'>Easy to use features</p>
        <p className='cashInformation2' style={{textAlign:'center'}}>Sometimes investing can be complicated and confusing. Cryptos Currencies Wallet breaks down the complexities of investing with intuitive tools that add efficiency and simplicity.</p>
        <div className='Important-Feature3'>
          <ImageFeatureDiscription Title={"User Home"} ImagePath={Feature}/>
          <ImageFeatureDiscription Title={"Trading Method"} ImagePath={Feature1}/>
          <ImageFeatureDiscription Title={"Withdraw"} ImagePath={Feature2}/>
        </div>
        <Link to={'/signup/:id'} className='SignUp-Button-Feature'>GET START FOR FREE</Link>
      </div>
      <div className='video-feature'>
        <div className='Important-of-Website' style={{borderRadius:'150px'}}>
          <p className='Important-of-Website1'>Build Your Investing Foundation</p>
          <p className='Website-Uses2'>Everybody has to start somewhere. As you begin your investment adventure, let us assist you get on the right journey. With the help of our video instructional section, you'll be prepared to begin right away.</p>
          <div className='video-feature1'>
            <VideoFeature title={"How to trade with your investment?"} videopath={videofeature1}/>
            <VideoFeature title={"How to withdraw your money?"} videopath={videofeature1}/>
          </div>
        </div>
      </div>
      <div className='userinterface-cash-informations'>
        <p className='Important-Feature1'>It’s easy to get start</p>
        <div className='userinterface-cash-informations'>
          <Steps
           title={"Sign-Up"}
           description={"Create an account for free using your email address"}
           icon={<PiNumberCircleOneFill size={"30px"} color='darkgreen'/>}/>
          <Steps
           title={"Invest & Save your coin"}
           description={"Invest money and convert to coin and save"}
           icon={<PiNumberCircleTwoFill size={"30px"} color='darkgreen'/>}/>
          <Steps
           title={"Trade & Earn Profit"}
           description={"Select an asset, trade and withdraw your money work for you"}
           icon={<PiNumberCircleThreeFill size={"30px"} color='darkgreen'/>}/>
        </div>
      </div>
      <div className='Important-of-Website'>
        <p className='Important-of-Website1'>Bank Withdraw Method</p>
        <div className='ChooseBank'>
          {
            Banks.map((bank) => (
              <div className='bank' key={bank.id}>
                <div className='bankIcon'>
                  <img src={bank.title}/>
                </div>
                <div>
                  {bank.title}
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <p>Coin Withdraw Method</p>
        <p>Move the wallet name</p>
      </div>
      <div>
        don't copy
      </div>
    </div>  
  )
}