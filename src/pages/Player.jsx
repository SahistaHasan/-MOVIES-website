import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../images/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Player = () => {
  const navigate = useNavigate();
  const {id}= useParams();
  const [getInfo, setGetInfo] = useState({
    key: "", 
    name: "",
    published_at: "",
    typeof:""
  })
  const [getMovies, setGetMovies]=useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODgzNmMzOWE5NDMwNWJhOTc0OWM3NWRlMzU1NzFhMyIsIm5iZiI6MTczMDI5NDEyMC45NDI0OTc3LCJzdWIiOiI2NzIyMmQzNjE4ODI3YTkzMjlmMTc2NmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Eje_1momTb8ZVkCq3xEoZ3l3NprSvUwFLFJNYrCDijM'
    }
  };
  useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setGetInfo(res.results[0]))
    .catch(err => console.error(err));

  fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setGetMovies(res.results))
  .catch(err => console.error(err));
  },[<Player/>]);

  var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:5,
    slidesToScroll: 1,
    respondTo:'slider'
  };

  return (
    <>
    <div className='player'>
      <Link to='/'><img src={back_arrow_icon}/></Link>
      <iframe width='90%' height='90%'
      src={`http://www.youtube.com/embed/${getInfo.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{getInfo.published_at.slice(0,10)}</p>
        <p>{getInfo.name}</p>
        <p>{getInfo.type}</p>
      </div>
    </div>
  <div>
      <div className='Cardstitle'><h2>Similar Movies</h2></div>
      <Slider {...settings1}>
      {getMovies.map((card,index)=> {
        return <div className='outer'><div onClick={()=>navigate(`/Player/${card.id}`, {replace:true}) }className='cards' key={index}>
          <img  className='cardimage' src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}></img></div>
        <p className='cardname'>{card.original_title}</p></div>
      })}
      </Slider>

    </div>
    </>
  )
}

export default Player
