import React from 'react'
import CardStyles from '../styles/Card.module.css'

const Card = ({nombre, artista, cancion}) => {
  return (
    <div className={CardStyles.cardContainer}>
      <h3>🎶 Hola {nombre} 🎶</h3>
      <p> Nos enteramos que disfrutas mucho escuchando a <b>{artista}</b> y que tu canción favorita es <b>{cancion}</b>.</p>
  
    </div>
  )
}

export default Card;