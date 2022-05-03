import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../h10/bll/store";
import {RequestAPI} from "../api/requestAPI";
import axios from "axios";

export enum REQUEST_REDUCER_ACTIONS_TYPE {
    TESTING_REQUEST = 'TESTING_REQUEST'
}


const initState = {
    success: true
}

type InitStateType = typeof initState
type RequestReducerActionsType = testingRequestACType


export const requestReducer = (state: InitStateType = initState, action: RequestReducerActionsType): InitStateType => {
    switch (action.type) {
        case REQUEST_REDUCER_ACTIONS_TYPE.TESTING_REQUEST:
            return {...state, success: action.success}
        default:
            return state
    }
}

type testingRequestACType = ReturnType<typeof toggleSuccess>
export const toggleSuccess = (success: boolean) => {
    return {
        type: REQUEST_REDUCER_ACTIONS_TYPE.TESTING_REQUEST,
        success
    } as const
}


//THUNK
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, RequestReducerActionsType>
// export const makeTestingRequest = (success: boolean):ThunkType => {
//     console.log('makeTestingRequest')
//     return async (dispatch) => {
//         console.log('async')
//         RequestAPI.testingRequest(success).then(response=> {
//             console.log(response)
//         })
//     }
// }
export const makeTestingRequest = (success: boolean): ThunkType => {
    console.log('makeTestingRequest')
    return async (dispatch) => {
        console.log('async')

        RequestAPI.testingRequest(success).then(response => {
            console.log(response)
        })
    }
}