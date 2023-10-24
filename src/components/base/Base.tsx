import React from 'react'
import { UserCard } from '../user-card/UserCard'
import { useSelector } from 'react-redux'
import { selectAllFilter } from '../../store/filter/filter-selectors'
import { RootState } from '../../store'
import { selectVisiblePositions } from '../../store/positions/positions-selectors'

export type UserPropsType = {
    id: number
    company: string
    logo: string
    isNew: boolean
    featured: boolean
    position: string
    role: string
    level: string
    postedAt: string
    contract: string
    location: string
    languages: string[]
    tools: string[] | []
}

export const Base: React.FC = () => {
    const currentFilter = useSelector(selectAllFilter)
    const users = useSelector((state: RootState) => selectVisiblePositions(state, currentFilter))
    return <div>
        {users.map(user => <UserCard key={user.id} {...user} />)}
    </div>
}
