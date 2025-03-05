// 必要なもの
// データの型を定義
// 表示：　タイトル、詳細情報、完了か？
import React from 'react';
import "./list.css"

interface TodoItemData { //今回はinterface型とtype型のどちらでも可
  title: string;
  description?: string;
  completed: boolean;
};

interface ListsProps {
  value: TodoItemData;
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
