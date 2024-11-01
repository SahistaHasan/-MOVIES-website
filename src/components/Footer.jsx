import React from 'react'
import'./Footer.css'
import youtube_icon from '../images/youtube_icon.png'
import twitter_icon from '../images/twitter_icon.png'
import facebook_icon from '../images/facebook_icon.png'
import instagram_icon from '../images/instagram_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={facebook_icon}></img>
        <img src={instagram_icon}></img>
        <img src={twitter_icon}></img>
        <img src={youtube_icon}></img>
      </div>
      <ul>
      <li>Auto Description</li>
      <li>Help Centre</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Investor Relation</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookies Preferences</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
      </ul>
      
    </div>
  )
}

export default Footer
