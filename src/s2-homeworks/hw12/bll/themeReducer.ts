import {Action} from "redux";

const initState = {
    themeId: 1,
}
type ThemeType = {
    themeId:number
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): ThemeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': return  {...state, themeId: action.id}
        default:
            return state
    }
}
type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const ) // fix any FFFFFFFFFIIIIIIIIIIIIIIXXXXXXXXXXX AAAAAAAAAAAAAAANNNNNNNNYYYYYYYYY
