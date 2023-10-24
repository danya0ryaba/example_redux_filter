import style from './search.module.css'
import { SearchElement } from '../search-element/SearchElement'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllFilter } from '../../store/filter/filter-selectors'
import { clearFilter, removeFilter } from '../../store/filter/filter-actions'
import React from 'react'

export const Search = () => {
    const dispatch = useDispatch()
    const allFilters = useSelector(selectAllFilter)

    const onClickRemoveFilter = React.useCallback((filter: string) => dispatch(removeFilter(filter)), [dispatch])

    return (
        <div>
            <div className={style.search}>
                <div className={style.search_info}>
                    <div className={style.filters}>
                        {allFilters.map((filter: string) => (<SearchElement
                            onClickRemoveFilter={onClickRemoveFilter}
                            key={filter}
                            filter={filter} />))}
                    </div>
                    <div onClick={() => dispatch(clearFilter)} className={style.search__clear}>Clear</div>
                </div>
            </div>
        </div>
    )
}