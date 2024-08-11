import React from 'react'
import Navbar from './Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card.jsx'


const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
  <>
   <Navbar/>

   <div className="slider-container px-4 md:px-20 my-7 ">
      <Slider {...settings}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        
      </Slider>
    </div>
   
   </>
  )
}

export default Home;