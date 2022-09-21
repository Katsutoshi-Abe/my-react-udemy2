import React, {useReducer, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers'

function App() {

  const [title, setTitle] = useState('')            // (初期値)
  const [body, setBody] = useState('')              // (初期値)
  const [state, dispatch] = useReducer(reducer, []) // (使用するreducer, 初期値)
  
  // イベント作成
  function addEvent(e) {
    e.preventDefault()  // 処理がない場合、白く暗転しなくなる

    // イベントの内容
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    // 入力欄をクリア
    setTitle('')
    setBody('')
  }

  return (
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>

      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className='btn btn-primary' onClick={addEvent}>イベントを作成する</button>
        <button className='btn btn-danger'>すべてのイベントを削除する</button>
      </form>



      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th><th>タイトル</th><th>ボディー</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default App
