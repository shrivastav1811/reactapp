import React from 'react';
import Common from './Common'; 
import Img from '../src/images/img1.png';


const Home = ()=>{
    return (
     <>
     <Common 
     name="Welcome To Home Page " 
     imgsrc={Img} 
      visit="/service"
      btnname="Get Started "/>    
     </>
       )
  }
    export default Home;