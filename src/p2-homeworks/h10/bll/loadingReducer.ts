import {AppStateType} from "./store";

const initState = {
    isLoading: false
}

type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: HW10ReducerType): InitStateType => {
    switch (action.type) {
        case "TOGGLE_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}





export const loadingAC = (isLoading: boolean) => {
    return {
        type: "TOGGLE_LOADING",
        isLoading
    } as const
}
 // fix any

type LoadingACType = ReturnType<typeof loadingAC>
export type HW10ReducerType = LoadingACType



export const SelectorAllState = (state: AppStateType) => state.HW10