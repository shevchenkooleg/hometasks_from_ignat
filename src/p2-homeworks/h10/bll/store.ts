import {applyMiddleware, combineReducers, createStore} from 'redux'
import { themeReducer } from '../../h12/bll/themeReducer'
import {loadingReducer} from './loadingReducer'
import {requestReducer} from "../../h13/bll/requestReduser";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    HW10: loadingReducer,
    HW12: themeReducer,
    HW13: requestReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>

export default store

//@ts-ignore
window.store = store;