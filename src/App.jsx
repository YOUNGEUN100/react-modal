import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {

  const [modal, setModal] = useState(false);

  return (
    <>
     <h1>App</h1>
     { modal ? <Modal setModal={setModal} /> : null }
     <button className='btn' onClick={()=>setModal(true)}>모달창 열기</button>
    </>
  )
}

export default App
