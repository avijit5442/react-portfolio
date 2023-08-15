import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <>
    <div>
        <Navbar/>
        <h2 className='text-danger text-center'>Contact me</h2>

        <h5 className='m-4' style={{position:"absolute"}}>
        Email : avijitbehera3688@outlook.com
        <br/>
        Mobile : +919686645379
        </h5>
        <div style={{borderLeft: "2px solid blue",
                     height:"250px",
                     marginLeft:"760px",
                     position:"fixed",
                     fontFamily:"monospace" }}>
          <div className='m-4'>
          <pre><b>Name</b>    :    Avijit Behera</pre>
          <pre><b>Age</b>   :    26Years</pre>
          <pre><b>From</b>   :    Bhadrak,Odisha</pre>
          <pre><b>Email</b>   :    avijitbehera3688@outlook.com </pre>
      </div>
      </div>
        <h3 style={{color:"blue",
    marginLeft: "-30%",
    marginTop: "6%"}}>Connect with me -</h3>
    </div>
    <br/>
    <div style={{marginLeft:"-15%"}}>
    <a href="https://github.com/avijit5442">
      <i className="bi bi-github m-4 h2"></i>
    </a>

    <a href="https://www.linkedin.com/in/avijit-behera-96148b264">
    <i className="bi bi-linkedin m-3 h2"></i>
    </a>
    </div>

    <br/><br/><br/><br/><br/>
  <hr className='m-4'/>
  <div className='text-center'>
    <span>Developer </span>
    <span>2023 @ all rights reserved.</span>
    <span>Managed by Develop</span>
  </div>

    </>


  )
}
