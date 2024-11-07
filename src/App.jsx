import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [musicInfo, setMusicInfo] = useState({
    nombre: "",
    artista:"",
    cancion:""
  });

  const [showInfo, setShowInfo] = useState(false);
  const [errorInfo, setErrorInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      musicInfo.nombre.length >=3
      && !musicInfo.nombre.startsWith(" ")
      && musicInfo.artista.length >=6
    ){
      setShowInfo(true)
      setErrorInfo(false)
    } else{
      setShowInfo(false)
      setErrorInfo(true)
    }
  
  };

  return (
  
    <div className='App'>
      <h1>Hablemos de música</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa tu nombre'
         onChange={(e) =>
          setMusicInfo({ ...musicInfo, nombre: e.target.value })
        }
        />
        <input type="text" placeholder='Ingresa el nombre de tu artista'
         onChange={(e) =>
          setMusicInfo({ ...musicInfo, artista: e.target.value })
         }
          />
        <input type="text" placeholder='Ingresa tu cancion favorita'
         onChange={(e) =>
          setMusicInfo({ ...musicInfo, cancion: e.target.value })
         }
        />
        <button>Enviar</button>
        {errorInfo ? <p>'Por favor chequea que la información sea correcta'</p> : null}
      </form>
      { showInfo ? (
        <Card nombre= {musicInfo.nombre} artista={musicInfo.artista} cancion={musicInfo.cancion}/>
      ) : null}
    </div>
  )
}

export default App
