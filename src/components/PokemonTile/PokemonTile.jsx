import React from 'react'
import './PokemonTile.css'
const PokemonTile = ({name, description, image}) => {
  return (
    <>
    <div className='pokemon-tile'>
        <h2>{name}</h2>
        <img src={image} alt={name} className='pokemon-image'/>
        <div>{description}</div>
        
    </div>
    </>
  )
}

export default PokemonTile