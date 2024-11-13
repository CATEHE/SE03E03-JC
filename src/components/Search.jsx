import React from 'react'
import { useRef, useState } from 'react'
import '../styles/search.css'

function Search( {setLocationId} ) {
  const [error, setError] = useState(' ')
  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    const id = parseInt(inputRef.current.value)

    if (isNaN(id)) {
      setError('🤪❗️ Introduce un número válido ')
      setTimeout(()=>{ setError('') }, 3000)
      return
    }
    if (id < 1 || id > 126) {
      setError('🧐❗️ You must to write an Id from 1 to 126')
      setTimeout(()=>{ setError('') }, 3000)
      return
    }
    setLocationId(id)
    e.target.reset()
  }

  return (
    <form onSubmit={onSubmit} className='search'>
      <input ref={inputRef} type='text' className='search__input'/>
      <button className='search__btn'>Search</button>
      <p className='search__error'>{error && error}</p>
    </form>
  )
}

export default Search