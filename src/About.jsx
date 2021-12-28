import React from 'react';
import Common from './Common'; 
import Img from '../src/images/bg1.png';

const About = ()=>{
    return (
     <>
     <Common 
     name="Welcome to About Page" 
     imgsrc={Img} 
      visit="/contact"
      btnname="Contact Now"/>    
     </>
       )
  }
    export default About;