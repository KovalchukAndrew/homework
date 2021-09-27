export type LoadingActionType = {
    type: 'LOADING'
    load: boolean
}

const initState = {
    load: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, load: action.load}
        }
        default: return state
    }
}

export const loadingAC = (load: boolean): LoadingActionType => {
    return {type: 'LOADING', load}
} // fix any