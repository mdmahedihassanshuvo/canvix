import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='btn btn-warning text-white p-3 '>done</button>
    </>
  )
}

export default App
