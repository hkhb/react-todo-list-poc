import { useEffect, useState } from "react"

// headerに完了ボタンと未完了ボタンを作成　タイトルも作成
// 完了ボタンを押すと完了しているリストが表示と非表示が切り替わる(デフォルト：表示)
// 未完了ボタンを押すと未完了なリストが表示と非表示が切り替わる(デフォルト：表示)
// app.tsxでフィルター処理
// 引数：フィルター処理関数
// 
// 
// s
interface headerprops {
  onSortList(boolean:Boolean,boolean2:boolean): () => void;
}

function Header({onSortList}:headerprops) {

  const [completed, setCompleted] = useState(true);
  const [unComplete, setUnComplete] = useState(true);

  const onCompleted = () =>{
    setCompleted(prev => !prev)
  }
  const onUnComplete = () =>{
    setUnComplete(prev => !prev)
  }

  useEffect (() => {
    onSortList(completed, unComplete)
  }, [completed, unComplete])

  return(
    <div className="conteinaer">
      <h1>TODOlist</h1>
      <div className="button-filed">
        <button onClick={onCompleted}>完了</button>
        <button onClick={onUnComplete}>未完了</button>
      </div>
    </div>
  )
}

export default Header;