import React from 'react';
import "./list.css"
import { TodoItem } from '../App.tsx'

interface TodoItemWithClick extends TodoItem {
  onClick: () => void;
}
  

  const Lists : React.FC<TodoItemWithClick> = ({completed, title, description, onClick}) => {

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
