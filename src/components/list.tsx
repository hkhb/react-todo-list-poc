import React from 'react';
import "./list.css"
import { TodoItem } from '../App.tsx'

interface TodoItemWithClick extends TodoItem {
  onClickEdit: () => void;
  onClickDelete: () => void;
}
  

  const Lists : React.FC<TodoItemWithClick> = ({completed, title, description, onClickEdit, onClickDelete}) => {

    return(
      <div className={`todo-item ${completed ? 'completed' : 'pending'}`} >
        <div className="todo-title-field">
          <h2 className="todo-title" onClick={onClickEdit}>{title}</h2>
          <p className="todo-status">
            {completed ? (
                  <span className="completed-icon">✔️ 完了</span>
              ) : (
                  <span className="pending-icon">❌ 未完了</span>
              )}
          </p>
          <button className='delete-button' onClick={onClickDelete}>削除</button>
        </div>
        <p className="todo-description" onClick={onClickEdit}>{description}</p>
      </div>
    )
}
export default Lists;
