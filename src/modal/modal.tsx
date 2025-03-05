//モーダルを作成
//
// 要件　内部コンテンツはchildrenで受け取る
// OKボタンを配置し、クリック時、propsのokボタンハンドラをコール
// キャンセルボタンを配置、クリック時、propsのキャンセルボタンハンドラをコール
import './modal.css'
interface modalprops{
  showFlag: boolean;
  content: React.ReactNode;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}


function Modal(props:modalprops){
  const closeModal = () =>{
    props.setShowModal(false);
  }
  return(
    props.showFlag?(
      <div id="overlay" className="overlay" >
        <div id="modalContent" className="modalContent">
          <div>
            <h1>modal</h1>
            <p>{props.content}</p>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      </div>
    ):
      null 
  )
} 
export default Modal;