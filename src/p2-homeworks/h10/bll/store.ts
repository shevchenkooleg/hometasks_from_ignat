import {combineReducers, createStore } from 'redux'
import { themeReducer } from '../../h12/bll/themeReducer'
import {loadingReducer} from './loadingReducer'
import {requestReducer} from "../../h13/bll/requestReduser";

const rootReducer = combineReducers({
    HW10: loadingReducer,
    HW12: themeReducer,
    HW13: requestReducer,
})

const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

export default store

//@ts-ignore
window.store = store;