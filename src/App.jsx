import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import PokemonSearch from './components/PokemonSearch'
import PokemonInfo from './components/PokemonInfo'
import PokemonFallbackError from './components/PokemonFallbackError'

function App() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemon, setPokemon] = useState({})
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!pokemonName.trim()) {
      setStatus('idle')
      return
    }

    try {
      setStatus('pending')
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      )
      const pokemon = await response.json()
      // ADD SOME DELAY
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 1000)
      // })
      setPokemon(pokemon)
      setStatus('resolved')
    } catch (error) {
      console.error(error)
      setStatus('rejected')
    }
  }
  const handleReset = () => {
    setPokemonName('')
    setStatus('idle')
  }

  return (
    <div className='w-96 mx-auto my-8 px-4 min-h-full '>
      <PokemonSearch
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        handleSubmit={handleSubmit}
      />
      {/* if PokenmonInfo have any error other than catch block it will be handled by an error boundary e.g. setPokemon(null) error */}
      <div className=' bg-gray-200 w-full h-80 mt-6'>
        <ErrorBoundary
          FallbackComponent={PokemonFallbackError}
          onReset={handleReset}
          resetKeys={[pokemonName, status]}
        >
          <PokemonInfo status={status} pokemon={pokemon} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
