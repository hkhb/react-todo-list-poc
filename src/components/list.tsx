import React from 'react';
import "./list.css"
import { TodoItem } from '../App.tsx'

  const Lists : React.FC<TodoItem> = ({completed, title, description}) => {
    return(
      <div className={`todo-item ${completed ? 'completed' : 'pending'}`}>
        <div className="todo-title-field">
          <h2 className="todo-title">{title}</h2>
          <p className="todo-status">
            {completed ? (
                  <span className="completed-icon">✔️ 完了</span>
              ) : (
                  <span className="pending-icon">❌ 未完了</span>
              )}
          </p>
        </div>
        
        <p className="todo-description">{description}</p>
        </div>
    )
}
export default Lists;
