import React from 'react'
import { useState } from 'react'
import '../styles/HeroVideo.css'
import { randomIndex } from './indexrandom.js'
import { img1, img2, img3, img4, img5 } from '../assets/images'


const images = [img1, img2, img3, img4, img5]



const HeroVideo = () => {
  
  const [imagen,setImagenes] = useState(images[randomIndex(images.length)])

  function cambiar(){
    setImagenes(images[randomIndex(images.length)])
  }
  
  return (
      <div className='wrapper' style={{ backgroundImage: `url('${imagen}')` }}>
        <h1 className='titulo'>The Rick and Morty</h1>
      </div>
  );
};

export default HeroVideo