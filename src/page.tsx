//必要なコンポーネント
//　リスト
// import Lists from './components/lists';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lists from "./components/list.tsx"
interface TodoItem {
  id: number;
  title: string;
  description?: string; // 任意の詳細情報
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;   // 更新日時（任意）
}
const todoItems:TodoItem[] = [
  {id : 1, title: "掃除", description: "キッチンの掃除", completed: false, createdAt: new Date(20250304)},
  {id : 2, title: "洗濯", completed: true, createdAt: new Date(20250304)},
  {id : 3, title: "料理", description: "味噌汁", completed: false, createdAt: new Date(20250304)},
  {id : 4, title: "掃除", description: "トイレの掃除", completed: false, createdAt: new Date(20250304)},
  {id : 5, title: "掃除", completed: false, createdAt: new Date(20250304)},
  {id : 6, title: "掃除", description: "キッチンの掃除", completed: true, createdAt: new Date(20250304)},
  {id : 7, title: "掃除", description: "キッチンの掃除", completed: false, createdAt: new Date(20250304)},
  {id : 8, title: "掃除", description: "キッチンの掃除", completed: false, createdAt: new Date(20250304)},
  {id : 9, title: "掃除", description: "キッチンの掃除", completed: true, createdAt: new Date(20250304)},
  {id : 10, title: "掃除", description: "キッチンの掃除", completed: false, createdAt: new Date(20250304)},
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>TODOlist</h1>
    <ul>
    {todoItems.map((todoItem)=> (<Lists key={todoItem.id} value={todoItem}/> ))}
    </ul>
  </StrictMode>,
);