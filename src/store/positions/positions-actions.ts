import { UserPropsType } from "../../components/base/Base"

export const ALL_POSITIONS = 'ALL_POSITIONS'

// ============ AC ============ //
export const allPosition = (positions: UserPropsType[]) => ({ type: ALL_POSITIONS, positions })

// ============ type action ============ //
type AllPositionsType = ReturnType<typeof allPosition>

export type RootPositionsAction = AllPositionsType