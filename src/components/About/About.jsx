import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(()=> {
 gsap.from(".circle", {
  x:-100,
  duration:1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger: ".circle",
    scroll: "body",
    scrub:2,
    start: "top 60%",
    end: "top 30",
  }
})
  gsap.from(".line",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger: ".line",
      scroll: "body",
      scrub:2,
      start: "top 60%",
      end: "top 30",
    }
})

gsap.from(".aboutdetails h1",{
  x:-100,
  duration:1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger: ".h1",
    scroll: "body",
    scrub:2,
    start: "top 60%",
    end: "top 30",
  }
})
  gsap.from(".aboutdetails ul",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger: ".aboutdetails li",
      scroll: "body",
      scrub:2,
      start: "top 60%",
      end: "top 30",
    }
  })

    gsap.from(".rightabout",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger: ".rightabout",
        scroll: "body",
        scrub:2,
        start: "top 60%",
        end: "top 30",
      }
})

  })
  return (
    <div id='about'>
<div className='leftabout'>
<div className='circle-line'>
<div className='circle'></div>
<div className='line'></div>
<div className='circle'></div>
<div className='line'></div>
<div className='circle'></div>
</div>

<div className='aboutdetails'>

<div className='personalinfo'>
<h1>Personal info</h1>
<ul>
  <li>
    <span>NAME</span> : SUMIT YADAV
  </li>
  <li>
    <span>AGE</span> : 21
  </li>
  <li>
    <span>LANGUAGE</span> : HINDI,ENGLISH
  </li>
</ul>

</div>

<div className='education'>
<h1>Education</h1>
<ul>
  <li>
    <span>DEGREE</span> : BACHELOR OF TECHNOLOGY
  </li>
  <li>
    <span>BRANCH</span> : COMPUTER SCIENCE AND ENGINEERING
  </li>
  <li>
    <span>CGPA</span> : 8.27
  </li>
</ul>

</div>

<div className='Skills'>
<h1>Skills</h1>
<ul>
  <li>
  FULL STACK DEVELOPER (MERN)
  </li>
  <li>
    <span>FRONTEND</span> : TAILWIND CSS, JAVASCRIPT, REACTJS
  </li>
  <li>
    <span>BACKEND</span> : NODEJS, EXPRESSJS, MONGODB
  </li>
  <li>
    <span> VERSION CONTROL</span> : GIT, GITHUB
  </li>
</ul>

</div>


</div>

</div>







<div className='rightabout'>
  <Card title="MERN STACK DEVELOPER"  image={mern}/>
  <Card title="JAVA" image={java}/>
  <Card title="DSA" image={dsa}/>
</div>
    </div>
  )
}

export default About