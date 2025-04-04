import './Modal.css'
import { useState, useEffect } from 'react';
interface modalProps{
  showFlag: boolean;
  modalTitle:string;
  onOk: ( title: string, description: string) => void;
  onCancel: () => void;
  title: string;
  description: string;
}

function Modal({
    showFlag,
    onCancel,
    onOk,
    title,
    description,
    modalTitle,
  }:modalProps){

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    setNewTitle(title);
    setNewDescription(description);
  }, [title, description, showFlag]);

  return(
    showFlag?(
      <div id="overlay" className="overlay" >
        <div id="modalContent" className="modalContent">
          <div>
            <button id="topBotton" onClick={onCancel}>cancel</button>
            <h1>{modalTitle}</h1>
            <div id="form-container">
              <div id='title-field'>
                <label>タイトル</label>
                <input
                  type="text"
                  id="title"
                  name='title'
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>
              <div id='description-field'>
                <label>詳細</label>
                <input
                  type="text"
                  id='description'
                  name='description'
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </div>
            </div>
            <button id='okButton' onClick={() => onOk(newTitle, newDescription)}>OK</button>
          </div>
        </div>
      </div>
    ):
      null 
  )
}
export default Modal;