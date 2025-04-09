import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import study from "../../assets/Study-notion.png"
import shop from "../../assets/Shop.png"
import weather from "../../assets/weatherapp.png"
import tic from "../../assets/tic-tac.png"
import ai from "../../assets/AI.webp"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Project = () => {
  useGSAP(()=> {
    gsap.from("#para",{
     y:100,
     duration:1,
     opacity:0,
     stagger:1,
     scrollTrigger:{
       trigger: "#para",
       scroll: "body",
       scrub:2,
       start: "top 60%",
       end: "top 30",
     }
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger: ".slider",
        scroll: "body",
        scrub:2,
        start: "top 60%",
        end: "top 30",
      }
     })
   })
  return (
    <div id='projects'>
        <h1 id='para'>1+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className='slider'>
<Card title="STUDY NOTION" image={study}/>
<Card title="AI CODE REVIEWER" image={ai}/>
<Card title="SHOPPING CART" image={shop}/>
<Card title="WEATHER APP" image={weather}/>
<Card title="TIC-TAC-TOE" image={tic}/>

        </div>
    </div>
  )
}

export default Project