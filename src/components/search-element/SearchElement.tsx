import React from 'react'
import style from './search-element.module.css'
import remove from '../../assets/images/icon-remove.svg'

type SearchElementPropsType = {
    filter: string
    onClickRemoveFilter: (filter: string) => void
}

export const SearchElement: React.FC<SearchElementPropsType> = React.memo(({ filter, onClickRemoveFilter }) => {
    return <div className={style.item_element}>
        <div className={style.element}>
            <h4 className={style.text}>{filter}</h4>
            <div className={style.remove} onClick={() => onClickRemoveFilter(filter)}>
                <img className={style.remove__img} src={remove} alt="remove" />
            </div>
        </div>
    </div>
})