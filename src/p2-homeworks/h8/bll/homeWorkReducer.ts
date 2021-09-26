import {InitialPeopleType} from "../HW8";

export type SortUpType = {
    type: 'sort'
    payload: 'up' | 'down'
}

export type CheckType = {
    type: 'check'
    payload: 18
}


export type ActionType = SortUpType | CheckType

export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.age - b.age)]
            } else {
                return [...state.sort((a, b) => b.age - a.age)]
            }
        }

        case 'check': {
            return [...state.filter(u => u.age > action.payload)]
        }
        default: return state
    }
}

