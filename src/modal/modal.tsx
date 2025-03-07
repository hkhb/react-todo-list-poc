import './modal.css'
interface modalProps{
  showFlag: boolean;
  children: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  okHandler: () => void;
  cancelHandler: () => void;
}


function Modal({
    showFlag,
    cancelHandler,
    okHandler,
    children
  }:modalProps){
  return(
    showFlag?(
      <div id="overlay" className="overlay" >
        <div id="modalContent" className="modalContent">
          <div>
            <h1>modal</h1>
            <div>{children}</div>
            <button onClick={cancelHandler}>cancel</button>
            <button onClick={okHandler}>OK</button>
          </div>
        </div>
      </div>
    ):
      null 
  )
} 
export default Modal;