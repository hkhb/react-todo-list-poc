import { useState, useEffect} from 'react';
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
  updatedAt?: Date; // 更新日時（任意）
}

function App() {

  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editList, setEditList] = useState<TodoItem>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedItem = localStorage.getItem('todoItems');
  
    if (storedItem) {
        const parsedItems: TodoItem[] = JSON.parse(storedItem).map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt),
          updatedAt: item.updatedAt ? new Date(item.updatedAt) : undefined,
        }));
        setTodoItems(parsedItems);
        setIsLoaded(true);
        console.log("find!!!!!!!!!!")
      }else{
      setTodoItems([]);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if(isLoaded){
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
      console.log("save!!!!!!!!!!")
    }
  },[todoItems])
  
  //モーダルを開く
  //引数　なし
  //戻り値　なし
  const openModal = () => {
    setShowModal(true);
  };
  //モーダルを閉じる
  //引数　なし
  //戻り値　なし
  const closeModal = () => {
    setShowModal(false);
    setIsEdit(false);
  };
  //モーダルをキャンセル
  //引数　なし
  //戻り値　なし
  const onModalCancel = () => {
    closeModal();
  };
  //listを受取、モーダルで編集する
  //引数　todoItem
  //戻り値　なし
  const onClickList = (todoItem: TodoItem) => {
    setIsEdit(true);
    setEditList(todoItem);
    openModal();
  };
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
    } else {
      alert("titleを入力してください");
    }
  };
  // 編集したものものを受取、リストに反映させる
  //引数　title, dedcriotion, id
  //titleがある場合
  //戻り値　なし
  //titleがない場合
  //戻り値　なし
  //titleがない場合は、alartを出す
  const onEditList = (title: string, description: string, id: number) => {
    if (!title) {
      alert("titleを入力してください");
      return;
    }

    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              title: title,
              description: description,
              updatedAt: new Date(),
            }
          : item,
      ),
    );
    closeModal();
  }

  const list = editList? editList : undefined;

  return (
    <div className="container">
      <h1>TODOlist</h1>
      <div className="open-modal">
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
              />
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
            /> 
          ))}
        </ul>
      :<p>リストはありません</p>  
      }
    </div>
  );
}

export default App;
