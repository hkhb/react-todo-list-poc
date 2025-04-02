import './modal.css'
import { useState, useEffect } from 'react';
interface modalProps{
  showFlag: boolean;
  // modalTitle:string;
  // onOk: ( title: string, description: string) => void;
  onCancel: () => void;
  // title: string;
  // description: string;
}


function Modal({
    showFlag,
    onCancel,
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
            {/* <button id='okButton' onClick={() => onOk()}>OK</button> */}
          </div>
        </div>
      </div>
    ):
      null 
  )
}
export default Modal;