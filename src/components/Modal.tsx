import './modal.css'
import { useState } from 'react';
interface modalProps{
  showFlag: boolean;
  // children: React.ReactNode;
  modalTitle:string;
  onOk: ( title: string, description: string, id?:number,) => void;
  onCancel: () => void;
}


function Modal({
    showFlag,
    onCancel,
    onOk,
    modalTitle,
  }:modalProps){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return(
    showFlag?(
      <div id="overlay" className="overlay" >
        <div id="modalContent" className="modalContent">
          <div>
            <button id="topBotton" onClick={onCancel}>cancel</button>
            <h1>{modalTitle}</h1>
            <div id="form-container">
              <div id="title-field">
                <div id='title-field'>
                  <label>タイトル</label>
                  <input
                    type="text"
                    id="title"
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div id='description-field'>
                  <label>詳細</label>
                  <input
                    type="text"
                    id='description'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button id='okButton' onClick={() => onOk(title, description)}>OK</button>
          </div>
        </div>
      </div>
    ):
      null 
  )
}
export default Modal;