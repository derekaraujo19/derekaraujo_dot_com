import React from 'react';
import { FaGithub, FaLinkedin, FaSpotify, FaMediumM, FaInstagram,FaEnvelope } from 'react-icons/fa';


function Footnote(){

const style = { color: "black", fontSize: "1.5em" }

  return (
        <footer className="Icons">
          <a href="https://github.com/derekaraujo19" style={style} target="_blank" rel='noopener noreferrer'> <FaGithub /> </a>
          <a href="https://www.linkedin.com/in/derek-araujo/" target="_blank" rel="noopener noreferrer" style={style}><FaLinkedin /> </a>
          <a style={style} href="https://medium.com/@derekaraujo19" target="_blank" rel="noopener noreferrer"> <FaMediumM/> </a>
          <a href="https://open.spotify.com/artist/0RW4vRpFksiQDl8gXO7NPI?si=QccPTEkFTl6JPrMEPPJm8Q" target="_blank" rel="noopener noreferrer" style={style}> <FaSpotify /></a>
          <a href="https://www.instagram.com/derek_araujo/" style={style} target="_blank" rel='noopener noreferrer'> <FaInstagram/> </a>
          <a href="mailto:derekaraujo19@gmail.com" style={style} target="_blank" rel='noopener noreferrer'> <FaEnvelope /> </a>
        </footer>
  );
}

export default Footnote;