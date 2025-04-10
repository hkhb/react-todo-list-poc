import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal.tsx";
import Lists from "./components/list.tsx";

export interface TodoItem {
  id: number;
  title: string;
  description?: string; // 任意の詳細情報
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date; // 更新日時（任意）
}

const initialTodoItems: TodoItem[] = [
  {
    id: 1,
    title: "掃除",
    description: "キッチンの掃除",
    completed: false,
    createdAt: new Date(2025, 3, 4),
    updatedAt: new Date(2025, 3, 4),
  },
  { id: 2, title: "洗濯", completed: true, createdAt: new Date(20250304) },
  {
    id: 3,
    title: "料理",
    description: "味噌汁",
    completed: false,
    createdAt: new Date(2025, 3, 4),
  },
  {
    id: 4,
    title: "掃除",
    description: "1234",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "掃除",
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    title: "掃除",
    description: "true",
    completed: true,
    createdAt: new Date(2025, 3, 4),
  },
  {
    id: 7,
    title: "1223",
    description: "null",
    completed: false,
    createdAt: new Date(2025, 3, 4),
  },
  {
    id: 8,
    title: "",
    description: "",
    completed: false,
    createdAt: new Date(20250304),
  },
  {
    id: 9,
    title: "掃除",
    description: "キッチンの掃除",
    completed: true,
    createdAt: new Date(2025, 3, 4),
  },
  {
    id: 10,
    title: "掃除",
    description: "キッチンの掃除",
    completed: false,
    createdAt: new Date(20250304),
  },
];

function App() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(initialTodoItems);
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editList, setEditList] = useState<TodoItem>();

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
  }
  //リストの削除
  //引数 id
  //idがある場合 
  //alartを出す(削除OK？)
  //戻り値なし
  //idがない場合 
  //alartを出す(idがない)
  //戻り値なし 
  //現在のtodolistを新しい変数で受け取る
  //リストごとに分割
  //idが同じでない場合、newtodolistに格納 
  //idが同じ場合、何もしない
  //setterでnewtodolistに変更
  const onDelete = (id:number) =>{
    if(!id){
      alert("idがありません")
      return;
    }
    const confirm = window.confirm("本当に削除しますか？");
    if(confirm){
    const prevtodoItems:TodoItem[] = todoItems
    const newtodoItems:TodoItem[] = 
    prevtodoItems.filter((Item:TodoItem) => Item.id !== id
    )
    setTodoItems(newtodoItems);
  }
  }
  const onAddList = (title:string, description:string) => {
    if(!!title){
      const newTodo:TodoItem = {
        id: todoItems.Math.max + 1,
        title,
        description,
        completed: false,
        createdAt: new Date(),
      }
      setTodoItems([...todoItems, newTodo]);
      closeModal();
  }
  
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const ListTitle:string = ((isEdit && editList) ? editList.title : "");
  const ListDescription:string = ((isEdit && editList)?editList.description ?? "" :"");

  //listの追加、編集のモーダル
  // 引数　なし
  // 戻り値　なし
  // isEditとeditListがあればonEditListを実行
  // なければonAddListを実行

  function onOk(){
    if(isEdit&&editList){
      onEditList(newTitle, newDescription, editList.id);
    }else{
      onAddList(newTitle, newDescription);
    }
  };

  useEffect(() => {
    setNewTitle(ListTitle);
    setNewDescription(ListDescription);
  }, [ListTitle, ListDescription, showModal]);

  useEffect(() => {
    setNewTitle(ListTitle);
    setNewDescription(ListDescription);
  }, [ListTitle, ListDescription, showModal]);

  const ItemModal = (
    <div>
      <h1>{isEdit ? "リスト編集" : "リスト追加"}</h1>
      <div id="form-container">
        <div id="title-field">
          <label>タイトル</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div id="description-field">
          <label>詳細</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h1>TODOlist</h1>
      <div className="open-modal">
        <button onClick={openModal}>新規作成</button>
        <Modal
          showFlag={showModal}
          onCancel={onModalCancel}
        >
          <h1>{isEdit ? "リスト編集" : "リスト追加"}</h1>
          <div id="form-container">
            <div id='title-field'>
              <label>タイトル</label>
              <input
                type="text"
                id="title"
                name='title'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div id='description-field'>
              <label>詳細</label>
              <input
                type="text"
                id='description'
                name='description'
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            <button id='okButton' onClick={onOk}>OK</button>
          </div>
        </Modal>
      </div>
      <ul>
        {todoItems.map((todoItem) => (
          <Lists
            key={todoItem.id}
            {...todoItem}
            onClickEdit={() => onClickList(todoItem)}
            onClickDelete={() => onDelete(todoItem.id)}
          /> 
        ))}
      </ul>
    </div>
  );
}

export default App;
