import React from 'react';
import "./list.css"
import { TodoItem } from '../App.tsx'
// import Modal from './Modal.tsx';

interface TodoItemWithClick extends TodoItem {
  // onOk: (title:string, description?:string, id:number, ) => void;
  onClick: () => void;
  // onCancel: () => void;
  // showFlag: boolean;
}

  const Lists : React.FC<TodoItemWithClick> = ({completed, title, description, onClick}) => {

    // //モーダルを開く
    // const onEditList = () => {
    //   onClick();
    //   <Modal
    //   showFlag={showModal}
    //   onCancel={onModalCancel}
    //   onOk={a}
    //   modalTitle="リスト編集"
    //   ></Modal>
    // }
    // //入力値を受け取る　onOk
    // const a = () => {
    //   onOk(title,description,id)
    // }
    
    return(
      <div className={`todo-item ${completed ? 'completed' : 'pending'}`} >
        <div className="todo-title-field">
          <h2 className="todo-title" onClick={onClick}>{title}</h2>
          <p className="todo-status">
            {completed ? (
                  <span className="completed-icon">✔️ 完了</span>
              ) : (
                  <span className="pending-icon">❌ 未完了</span>
              )}
          </p>
        </div>
        
        <p className="todo-description" onClick={onClick}>{description}</p>
        </div>
    )
}
export default Lists;
