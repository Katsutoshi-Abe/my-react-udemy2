import {
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from '../actions'

function operationLogs(state = [], action) {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const operationLOg = {
                description: action.description,
                operatedAt: action.operatedAt
            }
            return [operationLOg, ...state]

        case DELETE_ALL_OPERATION_LOGS:
            return []

        default:
            return state
    }
        
}

export default operationLogs