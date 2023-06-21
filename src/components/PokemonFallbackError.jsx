const PokemonFallbackError = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert' className='py-8 px-4'>
      <p className=''>Something went wrong:</p>
      <p className=' text-red-600 font-semibold'>{error.message}</p>
      <button
        className='bg-slate-800 text-white px-3 py-1 mt-4 rounded-sm'
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  )
}
export default PokemonFallbackError
