import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === "up"){
                return state.sort((x,y)=> x.name.localeCompare(y.name))
            }
            return  state.sort((x,y)=> y.name.localeCompare(x.name))
        }
        case 'check': {
            return state.filter(el=> el.age > 17) // need to fix
        }
        default:
            return state
    }
}
