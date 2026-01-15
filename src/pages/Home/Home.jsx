import { useState } from 'react'
import rawData from '../../data.js'
import PokemonTile from '../../components/PokemonTile/PokemonTile'
import './Home.css'



const Home = () => {

    const [pokemons, setPokemons] = useState(rawData)

    const clearAll = () => {
        setPokemons([])
    }
  return (
    <>
    <section className='pokemons'>
 <div className='pokemons-section'>
    {pokemons.map((pokemon)=>{
      const {id, name_pl,description_pl, image_url, type } = pokemon;
      return (
        
       <PokemonTile id={id} name={name_pl} description={description_pl} image={image_url}/>
       
      )
    })}
    
   
    </div>
     <button className='pokemons-btn' onClick={clearAll}>ClearAll</button></section>
    
    </>


  )
}

export default Home