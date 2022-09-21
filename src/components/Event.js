import React from "react";

function Event ({dispatch, event}) {
// イベント１件削除
    const id = event.id

    function handleClickDeleteButton() {
        // バッククォート(``)で囲んで、イベントidを参照する
        const result = window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)
        if (result) dispatch({type: 'DELETE_EVENT', id})
    }

    return(
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type='button' className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}


export default Event