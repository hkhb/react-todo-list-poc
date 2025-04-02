import './Modal.css'
import { ReactNode } from 'react';
interface modalProps{
  showFlag: boolean;
  onCancel: () => void;
  children?: ReactNode;
}


function Modal({
    showFlag,
    onCancel,
    children
    //onOk,
    // title,
    // description,
    // modalTitle,
  }:modalProps){

  // const [newTitle, setNewTitle] = useState("");
  // const [newDescription, setNewDescription] = useState("");

  // useEffect(() => {
  //   setNewTitle(title);
  //   setNewDescription(description);
  // }, [title, description, showFlag]);

  return(
    showFlag?(
      <div id="overlay" className="overlay" >
        <div id="modalContent" className="modalContent">
          <div>
            <button id="topBotton" onClick={onCancel}>cancel</button>
            {children}
            {/* <button id='okButton' onClick={() => onOk()}>OK</button> */}
          </div>
        </div>
      </div>
    ):
      null 
  )
}
export default Modal;