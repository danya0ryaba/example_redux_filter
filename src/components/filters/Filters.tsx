import React from 'react'
import style from './filters.module.css'

type FiltersPropsType = {
    filters: string[]
    addFilterHandler: (filter: string) => void
}

export const Filters: React.FC<FiltersPropsType> = React.memo(({ filters, addFilterHandler }) => {
    if (filters.length === 0) return <></>
    return <div className={style.filter_container}>
        {filters.map(item => (
            <div onClick={() => addFilterHandler(item)} key={item} className={style.card__filters}>
                <span className={style.filter_name}>
                    {item}
                </span>
            </div>
        ))}
    </div>
})