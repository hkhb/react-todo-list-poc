import './Modal.css'
interface modalProps{
  showFlag: boolean;
  children: React.ReactNode;
  onOk: () => void;
  onCancel: () => void;
}


function Modal({
    showFlag,
    onCancel,
    onOk,
    children
  }:modalProps){
  return(
    showFlag?(
      <div id="overlay" className="overlay" >
        <div id="modalContent" className="modalContent">
          <div>
            <button id="topBotton" className='topButton' onClick={onCancel}>cancel</button>
            <h1>modal</h1>
            <div>{children}</div>
            <button onClick={onOk}>OK</button>
          </div>
        </div>
      </div>
    ):
      null 
  )
} 
export default Modal;