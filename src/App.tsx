import { useState } from 'react';
import Lists from "./components/list.tsx"

export interface TodoItem {
  id: number;
  title: string;
  description?: string; // 任意の詳細情報
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;   // 更新日時（任意）
}

function App() {
  
  const todoItems:TodoItem[] = [
    {id : 1, title: "掃除", description: "キッチンの掃除", completed: false, createdAt: new Date(2025, 3, 4), updatedAt: new Date(2025, 3, 4)},
    {id : 2, title: "洗濯", completed: true, createdAt: new Date(20250304)},
    {id : 3, title: "料理", description: "味噌汁", completed: false, createdAt: new Date(2025, 3, 4)},
    {id : 4, title: "掃除", description: "1234", completed: false, createdAt: new Date()},
    {id : 5, title: "掃除", completed: false, createdAt: new Date(), updatedAt: new Date()},
    {id : 6, title: "掃除", description: "true", completed: true, createdAt: new Date(2025, 3, 4)},
    {id : 7, title: "1223", description: "null", completed: false, createdAt: new Date(2025, 3, 4)},
    {id : 8, title: "", description: "", completed: false, createdAt: new Date(20250304)},
    {id : 9, title: "掃除", description: "キッチンの掃除", completed: true, createdAt: new Date(2025, 3, 4)},
    {id : 10, title: "掃除", description: "キッチンの掃除", completed: false, createdAt: new Date(20250304)},
  ]
  
  return (
    <>
      <h1>TODOlist</h1>
    <ul>
    {todoItems.map((todoItem)=> (<Lists key={todoItem.id} {...todoItem}/> ))}
    </ul>
    </>
  );
}

export default App;