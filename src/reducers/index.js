function events(state = [], action) {
    switch(action.type) {
        case 'CREATE_EVENT':    // イベント追加
            const event = {title: action.title, body: action.body}
            // 新しいイベントの適切なidを探す
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id: id, ...event}]   // [既存のイベント, 新規イベントの{id, title, body}]

        case 'DELETE_EVENT':    // イベント１つ削除
            return state

        case 'DELETE_ALL_EVENTS':   // イベント全削除
            return []

        default:
            return state
    }
}

// componentsから利用するために、exportする
export default events