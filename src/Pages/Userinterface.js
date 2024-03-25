import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import './Button.css'

export default function Userinterface() {
  return (
    <div>
      <main className='m1'>
        <section className='s1'>
          <div>
            <Link style={{ border:"5px solid lightyellow", borderRadius:"50px"}} className='btn btn-outline-light' to="/Login/:id">LOGIN</Link>
          </div>
        </section>
        <section className='s2'>
          <div className='Homecustombackground'>
            <h1 data-aos="fade-up" className='homeTitle'>
              INSTANT ACCESS TO INVERSTING, ANYTIME AND ANYWHERE
            </h1>
            <h6 data-aos="fade-up" class="smallText">
              Investing has never been easier. Everything you are looking for in an ultimate investment platform — on the device of your choice.
            </h6>
            <Link style={{margin:"10%", marginTop:"5px",marginLeft:"0px"}} class="button-64" role="button" to="/signup/:id"><span class="text">GET START FOR FREE</span></Link>
          </div>
        </section>
      </main>
    </div>  
  )
}