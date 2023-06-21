const PokemonSearch = ({ pokemonName, setPokemonName, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='w-full flex gap-1'>
      <input
        className='flex-1 bg-blue-300 border-blue-400 border-2 text-black py-1 px-1 placeholder:text-gray-500 font-semibold'
        type='text'
        placeholder='Enter pokemon'
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />
      <button
        className='bg-blue-600 text-white px-4 py-1 rounded-sm'
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  )
}
export default PokemonSearch
