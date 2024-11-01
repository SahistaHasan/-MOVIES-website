import React from 'react'
import cards_data from '../cards/Cards_data'
import './Titlecards.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
const Titlecards = ({title,category}) => {

  const [getAPI, setGetAPI] = useState([]);
  

  const options = {
    
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODgzNmMzOWE5NDMwNWJhOTc0OWM3NWRlMzU1NzFhMyIsIm5iZiI6MTczMDI5NDEyMC45NDI0OTc3LCJzdWIiOiI2NzIyMmQzNjE4ODI3YTkzMjlmMTc2NmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Eje_1momTb8ZVkCq3xEoZ3l3NprSvUwFLFJNYrCDijM'
    }
  };
  
  
  useEffect(()=>{
    
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setGetAPI(res.results))
    .catch(err => console.error(err))
  },[]);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:5,
    slidesToScroll: 1,
    respondTo:'slider'
  };
    
  return (
    <div>
      <div className='Cardstitle'>{title?title:'Popular'}<h3 className="text-danger ">MOVIES</h3></div>
      <Slider {...settings}>
      {getAPI.map((card,index)=> {
        return <div className='outer'><Link to={`./Player/${card.id}`} className='cards' key={index}>
          <img  className='cardimage' src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}></img></Link>
        <p className='cardname'>{card.original_title}</p></div>
      })}
      </Slider>
    </div>
  )
}

export default Titlecards
