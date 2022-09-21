function events(state = [], action) {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = {title: action.title, bode: action.body}
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state, {id: id, ...event}]
        case 'DELETE_EVENT':
            return state
        case 'DELETE_ALL_EVENTS':
            return []
        default:
            return state
    }
}


export default events