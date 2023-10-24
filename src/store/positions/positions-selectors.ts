import { RootState } from "..";
import { UserPropsType } from "../../components/base/Base";

export const selectAllPositions = (state: RootState) => state.positions

export const selectVisiblePositions = (state: RootState, filter_: UserPropsType[] = []) => {
    if (filter_.length === 0) return state.positions

    return state.positions.filter((pos: UserPropsType) => {

        const posFilters: any = [pos.role, pos.level, ...pos.languages, ...pos.tools];

        return filter_.every(filter_item => posFilters.includes(filter_item))
    })
}