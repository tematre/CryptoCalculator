import { combineReducers } from 'redux'
import calculatorReducer from './calculatorReducer'
import logReducer from './logReducer'

export default combineReducers({
    calculatorReducer,
    logReducer
})