import React from 'react';
import { format } from 'date-fns';
import "./list.css"
import { TodoItem } from '../App.tsx'

interface TodoItemWithClick extends TodoItem {
  onClick: () => void;
  onSetComplete: () => void;
}
  

  const Lists : React.FC<TodoItemWithClick> = ({completed, title, description, createdAt, updatedAt, onClick, onSetComplete}) => {

    return(
      <div className={`todo-item ${completed ? 'completed' : 'pending'}`} >
        <div className="todo-title-field">
          <h2 className="todo-title" onClick={onClick}>{title}</h2>
          <p className="todo-status" onClick={onSetComplete}>
            {completed ? (
                  <span className="completed-icon">✔️ 完了</span>
              ) : (
                  <span className="pending-icon">❌ 未完了</span>
              )}
          </p>
        </div>
        <div>
          <p className="todo-description" onClick={onClick}>{description}</p>
          <p className='todo-time'>{displayDate}</p>
        </div>
      </div>
    )
}
export default Lists;
