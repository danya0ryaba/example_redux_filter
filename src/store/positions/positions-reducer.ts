import { UserPropsType } from "../../components/base/Base"
import { ALL_POSITIONS, RootPositionsAction } from "./positions-actions"

type InitialStateType = UserPropsType[]
const initialState: InitialStateType = []

export const positionsReducer = (state: InitialStateType = initialState, action: RootPositionsAction) => {
    switch (action.type) {
        case ALL_POSITIONS:
            return [...action.positions]
        default:
            return state
    }
}