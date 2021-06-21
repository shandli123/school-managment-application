import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './AuthReducer'
import StudentReducer from './StudentReducer'
import TeacherReducer from './TeacherReducer'

export default combineReducers({
    auth:AuthReducer,
    form: formReducer,//the key always has to be form mandatory
    studentcourse:StudentReducer,
    teachercourse:TeacherReducer
    
})