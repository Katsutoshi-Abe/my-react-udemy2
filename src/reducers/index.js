import {
    CREATE_EVENT,
    DELETE_EVENT,
    DELETE_ALL_EVENTS
} from '../actions'

function events(state = [], action) {
    switch(action.type) {

        // イベント追加
        case CREATE_EVENT:    
            const event = {title: action.title, body: action.body}
            // 新しいイベントの適切なidを探す
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id: id, ...event}]   // [既存のイベント, 新規イベントの{id, title, body}]

        // イベント１つ削除
        case DELETE_EVENT:    
            return state.filter(event => event.id !== action.id)    // 削除したいid(action.id)と一致しないイベントだけを抽出

        // イベント全削除
        case DELETE_ALL_EVENTS:   
            return []

        default:
            return state
    }
}

// componentsから利用するために、exportする
export default events