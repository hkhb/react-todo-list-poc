import { useState, useEffect,} from 'react';
import "./App.css"
import Modal from './components/Modal.tsx'
import Lists from "./components/list.tsx"
import ItemModal from "./components/ItemModal.tsx"

export interface TodoItem {
  id: number;
  title: string;
  description?: string; // 任意の詳細情報
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;   // 更新日時（任意）
}

// const initialTodoItems:TodoItem[] = [
//   {id : 1, title: "掃除", description: "キッチンの掃除", completed: false, createdAt: new Date(2025, 3, 4), updatedAt: new Date(2025, 3, 4)},
//   {id : 2, title: "洗濯", completed: true, createdAt: new Date(20250304)},
//   {id : 3, title: "料理", description: "味噌汁", completed: false, createdAt: new Date(2025, 3, 4)},
//   {id : 4, title: "掃除", description: "1234", completed: false, createdAt: new Date()},
//   {id : 5, title: "掃除", completed: false, createdAt: new Date(), updatedAt: new Date()},
//   {id : 6, title: "掃除", description: "true", completed: true, createdAt: new Date(2025, 3, 4)},
//   {id : 7, title: "1223", description: "null", completed: false, createdAt: new Date(2025, 3, 4)},
//   {id : 8, title: "", description: "", completed: false, createdAt: new Date(20250304)},
//   {id : 9, title: "掃除", description: "キッチンの掃除", completed: true, createdAt: new Date(2025, 3, 4)},
//   {id : 10, title: "掃除", description: "キッチンの掃除", completed: false, createdAt: new Date(20250304)},
// ]

function App() {

  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editList, setEditList] = useState<TodoItem>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedItem = localStorage.getItem('todoItems');
  
    if (storedItem && storedItem !== "undefined") {
        const parsedItems: TodoItem[] = JSON.parse(storedItem).map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt),
          updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
        }));
        setTodoItems(parsedItems);
        setIsLoaded(true);
      }else{
      setTodoItems(undefined);
    }
  }, []);

  useEffect(() => {
    if(isLoaded){
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }
  },[todoItems])
  
  //モーダルを開く
  //引数　なし
  //戻り値　なし
  const openModal = () =>{
    setShowModal(true);
  }
  //モーダルを閉じる
  //引数　なし
  //戻り値　なし
  const closeModal = () =>{
    setShowModal(false);
    setIsEdit(false);
  }
  //モーダルをキャンセル
  //引数　なし
  //戻り値　なし
  const onModalCancel = () => {
    closeModal();
  };
  //listを受取、モーダルで編集する
  //引数　todoItem
  //戻り値　なし
  const onClickList = (todoItem:TodoItem) => {
    setIsEdit(true);
    setEditList(todoItem);
    openModal();
  }
  //新しいリストの追加
  //引数　title, dedcriotion
  //戻り値　なし
  const onAddList = (title:string, description:string) => {
    if(!!title){
      if(todoItems){
        const newTodo:TodoItem = {
          id: todoItems.length + 1,
          title,
          description,
          completed: false,
          createdAt: new Date(),
        }
        setTodoItems([...todoItems, newTodo]);
      }else{
        const newTodo:TodoItem = {
          id: 1,
          title,
          description,
          completed: false,
          createdAt: new Date(),
        }
        setTodoItems([newTodo]);
      }
      closeModal();
    }else{
      alert("titleを入力してください")
    }
  }
  // 編集したものものを受取、リストに反映させる
  //引数　title, dedcriotion, id
  //titleがある場合
  //戻り値　なし
  //titleがない場合
  //戻り値　なし
  //titleがない場合は、alartを出す
  const onEditList = (title:string, description:string, id:number) => {
    if(!title){
      alert("titleを入力してください")
      return;
    }
    
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? {...item, title: title, description: description, updatedAt: new Date() } : item
    ));
    closeModal();
  }
  const onSetComplete = (todoItem:TodoItem) => {
    if(!todoItem.id){
      alert("もう一度やり直してください notid")
      return;
    }
    
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === todoItem.id ? {...item, completed:true, updatedAt: new Date() } : item
    ));
  }

  const list = editList? editList : undefined;

  return (
    <div className='container'>
      <h1>TODOlist</h1>
      <div className='open-modal' >
        <button onClick={openModal}>新規作成</button>
        <Modal
          showFlag={showModal}
          onCancel={onModalCancel}
        >
          <div>
            <ItemModal
              editList={list}
              isEdit={isEdit}
              onEditList={onEditList}
              onAddList={onAddList}
              >
            </ItemModal>
          </div>
        </Modal>
      </div>
      {todoItems? 
        <ul>
          {todoItems.map((todoItem)=> (
            <Lists
              key={todoItem.id}
              {...todoItem}
              onClick={() => onClickList(todoItem)}
              onSetComplete={() => onSetComplete(todoItem)}
            /> 
          ))}
        </ul>
      :<p>リストはありません</p>  
      }
    </div>
  )
}

export default App;