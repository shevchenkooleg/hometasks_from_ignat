import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: {type:string; payload:string|number}): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload == 'up') {
                const newState = [...state]
                newState.sort((a,b)=> (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
                return newState
            } else {
                const newState = [...state]
                newState.sort((a,b)=> (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1))
                return newState
            }
        }
        case 'check': {
            const newState = [...state]
            return newState.filter(el=>el.age>=18)
        }
        default: return state
    }
}