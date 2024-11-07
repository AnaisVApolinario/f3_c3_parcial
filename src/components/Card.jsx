import React from 'react'

const Card = ({nombre, artista, cancion}) => {
  return (
    <div className='Card'>
      <p>{nombre}</p>
      <p>{artista}</p>
      <p>{cancion}</p>
    </div>
  )
}

export default Card;