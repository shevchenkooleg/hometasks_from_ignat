import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../h10/bll/store";
import {RequestAPI} from "../api/requestAPI";

export enum REQUEST_REDUCER_ACTIONS_TYPE {
    TESTING_REQUEST = 'TESTING_REQUEST',
    SET_RESPONSE_MESSAGES = 'SET_RESPONSE_MESSAGES'
}


const initState = {
    success: true,
    errorText: '',
    info: '',
}

type InitStateType = typeof initState
type RequestReducerActionsType = testingRequestACType | setResponseMessagesACType


export const requestReducer = (state: InitStateType = initState, action: RequestReducerActionsType): InitStateType => {
    switch (action.type) {
        case REQUEST_REDUCER_ACTIONS_TYPE.TESTING_REQUEST:
            return {...state, success: action.success}
        case REQUEST_REDUCER_ACTIONS_TYPE.SET_RESPONSE_MESSAGES:
            return {...state, errorText: action.errorText, info: action.info}
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

type setResponseMessagesACType = ReturnType<typeof setResponseMessages>
export const setResponseMessages = (errorText: string, info: string) => {
    return {
        type: REQUEST_REDUCER_ACTIONS_TYPE.SET_RESPONSE_MESSAGES,
        errorText,
        info
    } as const
}


//THUNK
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, RequestReducerActionsType>
export const makeTestingRequest = (success: boolean): ThunkType => {
    return async (dispatch) => {
        dispatch(setResponseMessages('', ''))
        RequestAPI.testingRequest(success)
            .then(response => {
                // console.log(response.data)
                dispatch(setResponseMessages(response.data.errorText, response.data.info))
            })
            .catch(err => {
                // console.log(err)
                dispatch(setResponseMessages(err.response.data.errorText, err.response.data.info))
            })
    }
}