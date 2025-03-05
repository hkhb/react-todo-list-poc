import { useState } from 'react';
import './App.css';
import Modal from './modal/modal'

function App() {
  const [count, setCount] = useState(0);
  const [switchStatus, setswitchStatus] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const openModal = () =>{
    setShowModal(true);
  }
  
  return (
    <>
      <h1>Vite + React</h1>
      <h1>Hello world</h1>
      <div className="card">
      <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setswitchStatus(switchStatus + 1)}>
          {switchStatus%2? "ON" : "OFF" }
        </button>
      </div>
      <button onClick={openModal}>openmodal</button>
      <Modal showFlag={showModal} setShowModal={setShowModal} content="親から渡された値です。"/>
    </>
  )
}

export default App;