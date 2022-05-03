import {AppStateType} from "../../h10/bll/store";

export enum THEME_REDUCER_ACTION_TYPE {
    CHANGE_THEME_COLOR = 'CHANGE_THEME_COLOR'

}

export type ThemeType = 'dark' | 'red' | 'green'
export type ThemeReducerType = ChangeColorThemeACType


const initState = {
    theme: 'red',
}

type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: ThemeReducerType): InitStateType => {
    switch (action.type) {
        case THEME_REDUCER_ACTION_TYPE.CHANGE_THEME_COLOR:
            return {...state, theme: action.theme}
        default:
            return state
    }
}

type ChangeColorThemeACType = ReturnType<typeof changeColorTheme>
export const changeColorTheme = (theme: ThemeType) => {
    return {
        type: THEME_REDUCER_ACTION_TYPE.CHANGE_THEME_COLOR,
        theme
    } as const
}


export const SelectorHW12State = (state: AppStateType) => state.HW12