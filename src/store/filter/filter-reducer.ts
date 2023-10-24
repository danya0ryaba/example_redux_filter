import { ADD_FILTER, REMOVE_FILTER, CLEAR_ALL_FILTER, RootActionType } from "./filter-actions"

type InitialStateType = any
const initialState: InitialStateType = []

export const filterReducer = (state: InitialStateType = initialState, action: RootActionType) => {
    switch (action.type) {
        case ADD_FILTER:
            if (state.includes(action.filter)) return state
            else return [...state, action.filter]
        case REMOVE_FILTER:
            return state.filter((filter: string) => filter !== action.filter)
        case CLEAR_ALL_FILTER:
            return []
        default:
            return state
    }
}