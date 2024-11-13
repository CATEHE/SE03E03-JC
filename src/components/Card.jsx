import React from 'react'
import '../styles/Card.css'

function Card({ location }) {
  return (
    <div className='cardInfo'>
       <h2 className='cardInfo__name'>{location?.name}</h2>
       <div className='cardInfo__container'>

          <div className='cardInfo__item'>
            <h3 className='cardInfo__item-title'>Type</h3>
            <p className='cardInfo__item-data'> {location?.type}</p>
          </div>
          <div className='cardInfo__item'>
            <h3 className='cardInfo__item-title'>Dimension</h3>
            <p className='cardInfo__item-data'>{location?.dimension}</p>
          </div>
          <div className='cardInfo__item'>
            <h3 className='cardInfo__item-title'>Populate</h3>
            <p className='cardInfo__item-data'>{location?.residents?.length}</p>
          </div>

       </div>
    </div>
  )
}

export default Card
