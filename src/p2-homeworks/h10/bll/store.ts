import {combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'

// const reducers = combineReducers({
//     loading: loadingReducer,
//
// })
//
// const store = createStore(reducers)
//
// export default store
//
// export type AppStoreType = ReturnType<typeof reducers>
//
// // @ts-ignore
// window.store = store // for dev

const rootReducer = combineReducers({HW10: loadingReducer})

const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

export default store

//@ts-ignore
window.store = store;