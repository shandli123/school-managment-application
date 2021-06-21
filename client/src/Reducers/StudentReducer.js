import _ from 'lodash'


export default (state = {}, action) => {
    switch (action.type) {
        case "JOIN_COURSE":
            return { ...state, [action.payload.id]: action.payload }
        case "FETCH_COURSE":
            return { ...state, [action.payload.id]: action.payload }
        case "FETCH_COURSES":
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        case "DELETE_COURSEOFSTUDENT":
            return _.omit(state, action.payload)
        default:
            return state;
    }
}