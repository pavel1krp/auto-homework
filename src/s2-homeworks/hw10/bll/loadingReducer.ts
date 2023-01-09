const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): any => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING": return !state

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
