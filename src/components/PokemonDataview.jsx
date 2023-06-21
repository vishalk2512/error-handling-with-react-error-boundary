import { useState } from 'react'

const PokemonDataview = ({ pokemon }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div className='h-full pt-4'>
      <h1 className='text-center mb-1 font-semibold'>Name : {pokemon.name}</h1>
      <p className='text-center mb-1 font-semibold'>
        Weight : {pokemon.weight}
      </p>
      <p className='text-center mb-1 font-semibold'>
        Height : {pokemon.height}
      </p>
      <p className='text-center mb-1 font-semibold'>
        Base Experience : {pokemon['base_experience']}
      </p>
      {!imageLoaded && (
        <p className='text-center mt-8 font-semibold'>Loading image...</p>
      )}
      <img
        className='mx-auto'
        src={pokemon.sprites['front_default']}
        alt={pokemon.name}
        loading='lazy'
        onLoad={handleImageLoad}
      />
    </div>
  )
}
export default PokemonDataview
