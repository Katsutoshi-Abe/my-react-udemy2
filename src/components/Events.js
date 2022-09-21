import React from "react";
import Event from './Event'

function Events({state, dispatch}) { // ページ内で共有するため、App.jsから渡された{state, dispatch}を使う
    return(
        <>
            <h4>イベント一覧</h4>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>ID</th><th>タイトル</th><th>ボディー</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((event, index) => (<Event dispatch={dispatch} event={event} key={index} />))}
                </tbody>
            </table>
        </>
    )
}

export default Events