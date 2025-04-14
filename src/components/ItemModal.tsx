import React from 'react';
import { useState, useEffect } from "react";
import { TodoItem } from '../App.tsx'

interface ItemModalProps {
  editList?: TodoItem;
  isEdit: boolean;
  onEditList: (title:string, description:string, id:number) => void;
  onAddList: (title:string, description:string) => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ editList, isEdit, onEditList, onAddList }) => {

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const ListTitle:string = ((isEdit && editList) ? editList.title : "");
  const ListDescription:string = ((isEdit && editList)?editList.description ?? "" :"");

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
    }, [ListTitle, ListDescription]);

  return(
  <div>
    <h1>{isEdit ? "リスト編集" : "リスト追加"}</h1>
    <div className="form-container">
      <div className='title-field'>
        <label>タイトル</label>
        <input
          type="text"
          className="title"
          name='title'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </div>
      <div id='description-field'>
        <label>詳細</label>
        <input
          type="text"
          className='description'
          name='description'
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <button className='okButton' onClick={onOk}>OK</button>
    </div>
  </div>
  )
};
export default ItemModal;