import PokemonDataview from './PokemonDataview'

const PokemonInfo = ({ status, pokemon }) => {
  const idle = status === 'idle'
  const pending = status === 'pending'
  const resolved = status === 'resolved'
  const rejected = status === 'rejected'

  if (idle) {
    return (
      <p className='text-center pt-4 font-semibold text-xl'>Submit a pokemon</p>
    )
  } else if (pending) {
    return (
      <div className='h-full flex justify-center items-center'>
        <div className='loader'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
    )
  } else if (resolved) {
    return <PokemonDataview pokemon={pokemon} />
  } else if (rejected) {
    return (
      <p className='text-center pt-4 font-semibold text-xl text-red-700'>
        Pokemon not found!
      </p>
    )
  }
}
export default PokemonInfo
