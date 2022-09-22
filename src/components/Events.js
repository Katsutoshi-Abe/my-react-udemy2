import React, {useContext} from "react";
import AppContext from "../contexts/AppContext";
import Event from './Event'

function Events({state, dispatch}) { // ページ内で共有するため、App.jsから渡された{state, dispatch}を使う
    const value = useContext(AppContext)
    return(
        <>
            <div>{value}</div>
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