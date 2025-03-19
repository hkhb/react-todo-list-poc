import React from "react";
import { format } from "date-fns";
import "./list.css";
import { TodoItem } from "../App.tsx";

interface TodoItemWithClick extends TodoItem {
  onClickEdit: () => void;
  onClickDelete: () => void;
}

const Lists: React.FC<TodoItemWithClick> = ({
  completed,
  title,
  description,
  createdAt,
  updatedAt,
  onClick,
}) => {
  const displayDate = format(
    updatedAt ? updatedAt : createdAt,
    "yyyy-MM-dd HH:mm",
  );

    return(
      <div className={`todo-item ${completed ? 'completed' : 'pending'}`} >
        <div className="todo-title-field">
          <h2 className="todo-title" onClick={onClickEdit}>{title}</h2>
          <p className="todo-status" onClick={onClickDelete}>
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
