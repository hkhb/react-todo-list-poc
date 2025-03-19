import './modal.css'
import { useState } from 'react';
interface modalProps{
  showFlag: boolean;
  // children: React.ReactNode;
  modalTitle:string;
  onOk: ( title: string, description: string, id?:number,) => void;
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

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  console.log(`title: ${title}`);
  console.log(`newtitle: ${newTitle}`);
  console.log(`description: ${description}`);
  console.log(`newdescription: ${newDescription}`);

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
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div id='description-field'>
                  <label>詳細</label>
                  <input
                    type="text"
                    id='description'
                    name='description'
                    value={description}
                    onChange={(e) => setNewDescription(e.target.value)}
                  />
                </div>
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