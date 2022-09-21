import React, {useState} from "react"

function EventForm({state, dispatch}) { // ページ内で共有するため、App.jsから渡された{state, dispatch}を使う

    const [title, setTitle] = useState('')            // (初期値)
    const [body, setBody] = useState('')              // (初期値)
    
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
    
    // タイトルとボディーが入力されている時だけ、イベント作成ボタンを押せるようにする
    const uncreatable = title === '' || body === ''
  
    // イベント全削除
    function deleteAllEvents(e) {
      e.preventDefault()
  
      const result = window.confirm('すべてのイベントを本当に削除しても良いですか？')
      if (result) dispatch({type: 'DELETE_ALL_EVENTS'})
    }


    return (
        <React.Fragment>
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

                <button className='btn btn-primary' onClick={addEvent} disabled={uncreatable}>イベントを作成する</button>
                <button className='btn btn-danger' onClick={deleteAllEvents} disabled={state.length === 0}>すべてのイベントを削除する</button>
            </form>
        </React.Fragment>
    )
}

export default EventForm