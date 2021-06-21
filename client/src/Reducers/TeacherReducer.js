import _ from 'lodash'


export default (state = {}, action) => {
    switch (action.type) {
        case "CREATE_COURSE":
            return { ...state, [action.payload.id]: action.payload }
        case "FETCH_COURSEOFOWNER":
            return { ...state, [action.payload.id]: action.payload }
        case "FETCH_COURSESBYOWNER":
            return { ...state, ..._.mapKeys(action.payload, 'id') }

        case "EDIT_COURSE":
            return { ...state, [action.payload.id]: action.payload }
        case "DELETE_STREAM":
            return _.omit(state, action.payload)
        default:
            return state;
    }
}