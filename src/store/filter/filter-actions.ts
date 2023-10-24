export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const CLEAR_ALL_FILTER = 'CLEAR_ALL_FILTER'

// =========== AC =========== //
export const addFilter = (filter: string) => ({ type: ADD_FILTER, filter })
export const removeFilter = (filter: string) => ({ type: REMOVE_FILTER, filter })
export const clearFilter = { type: CLEAR_ALL_FILTER }

// =========== types action ===========//
type AddFilterAC = ReturnType<typeof addFilter>
type RemoveFilterAC = ReturnType<typeof removeFilter>
type ClearFilterAC = { type: 'CLEAR_ALL_FILTER' }

export type RootActionType = AddFilterAC | RemoveFilterAC | ClearFilterAC