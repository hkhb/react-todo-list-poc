import React from 'react';
import { useState, useEffect } from "react";

interface ItemModalProps {
  ListTitle: any;
  ListDescription: any;
  isEdit: any;
  onOk: any;
}

const ItemModal: React.FC<ItemModalProps> = ({ ListTitle, ListDescription, isEdit, onOk }) => {

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
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