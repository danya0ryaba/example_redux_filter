import React from 'react'
import style from './user-card.module.css'
import { Filters } from '../filters/Filters'
import { UserPropsType } from '../base/Base'
import { useDispatch } from 'react-redux'
import { addFilter } from '../../store/filter/filter-actions'

export const UserCard: React.FC<UserPropsType> = React.memo((
    { id,
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools
    }
) => {
    const dispatch = useDispatch()
    const filters_user = languages.concat(tools, level, role)

    const addFilterHandler = React.useCallback((filter: string) => {
        dispatch(addFilter(filter))
    }, [dispatch])

    return <div>
        <div className={style.card}>
            <div className={style.card__info}>
                <div className={style.avatar}>
                    <img src={logo} alt="avatar" />
                </div>
                <div className={style.info}>
                    <div className={style.company}>
                        {company}
                        {isNew ? <span className={style.isNew}>new!</span> : false}
                        {featured ? <span className={style.feature}>featured</span> : false}
                    </div>
                    <div className={style.position}>
                        {position}
                    </div>
                    <div className={style.about_info}>
                        <div className={style.item__info}>{postedAt}</div>
                        <div className={style.item__info}>{contract}</div>
                        <div className={style.item__info}>{location}</div>
                    </div>
                </div>
            </div>
            <Filters addFilterHandler={addFilterHandler} filters={filters_user} />
        </div>
    </div>
})