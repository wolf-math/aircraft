import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  const [planes, setPlanes] = useState([])

    useEffect(() => {
    fetch('http://localhost:3000/api/airplanes')
      .then(response => response.json())
      .then(json => setPlanes(json))
      .catch(error => console.error(error));
    }, [setPlanes]);

  return (
    <>
      <h1>AIRPLANES!</h1>

      {planes.map(plane => (
        <h2 key={plane.id}>{plane.manufacturer} {plane.fullName}</h2> 
      ))}
    </>
  )
}

export default App
