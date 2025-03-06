import React from 'react';
import "./list.css"
import { TodoItem } from '../page.tsx'

interface ListsProps {
  value: TodoItem;
}

  const Lists : React.FC<ListsProps> = ({value}) => {
    return(
      <div className={`todo-item ${value.completed ? 'completed' : 'pending'}`}>
        <div className="todo-title-field">
          <h2 className="todo-title">{value.title}</h2>
          <p className="todo-status">
            {value.completed ? (
                  <span className="completed-icon">✔️ 完了</span>
              ) : (
                  <span className="pending-icon">❌ 未完了</span>
              )}
          </p>
        </div>
        
        <p className="todo-description">{value.description}</p>
        </div>
    )
}
export default Lists;
