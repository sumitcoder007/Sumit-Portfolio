import React from 'react'
import './Home.css'
import sumit from "../../assets/sumit.png"
import { Typewriter } from 'react-simple-typewriter';
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'

const Home = () => {
  useGSAP (( )=>{
    let tl1 =gsap.timeline();
    tl1.from(".line1", {
      y:80,
      duration:1,
      opacity:0
    })
    
    tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })

    tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })


    gsap.from(".righthome  img",{
      x:200,
      duration:1,
      opacity:0
    })


  })

  return (
    <div id='home'>
<div className='lefthome'> 
<div className='homedetails'>
  <div className='line1'>I'M</div>
  <div className='line2'>SUMIT YADAV</div>
  <div className='line3'>
  <Typewriter
  words={['MERN STACK DEVELOPER','SOFTWARE DEVELOPER']}
  loop={true}
  cursor
  cursorStyle="|"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>
</div>
<div>
<button>Hire me</button>
</div>
</div>
</div>






{/* Right */}
<div className='righthome'>

  <img src ={sumit} alt=''/>
</div>

    </div>
  )
}

export default Home