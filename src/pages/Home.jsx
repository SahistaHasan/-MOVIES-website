import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import hero_banner from '../images/hero_banner.jpg'
import hero_title from '../images/hero_title.png'
import play_icon from '../images/play_icon.png'
import info_icon from '../images/info_icon.png'
import './Home.css'
import { Link } from 'react-router-dom'
import Titlecards from '../components/Titlecards'
const Home = () => {
  return (
    <>
    
      <Header/>
      
        <img src={hero_banner} style={{height:"100vh"}} className='w-100 banner'></img>
        
        <img src={hero_title} className='title'></img>
    <p className='titleinfo'>Discover his ties to a secret ancient order,
    a young man living in modern<br/> Instanbul embarks on a quest to save the
     city from an immortal enemy</p>
     <Link to='./Player/Protector'  className="btn btn-light play"><img className='playicon'src={play_icon}></img>Play</Link>
     <Link to='./info' className="info"><img className='infoicon'src={info_icon}></img>More info</Link>
     
     <Titlecards title={'Popular on'} category={'now_playing'}/>
     
     
     <Titlecards  title={'Blockbuster'} category={'popular'}/>
     
     
     <Titlecards  title={'Only on'} category={'top_rated'}/>
     
     <Titlecards  title={'Upcoming'} category={'upcoming'}/>
     
     <Footer/>
     </>
  )
}

export default Home
