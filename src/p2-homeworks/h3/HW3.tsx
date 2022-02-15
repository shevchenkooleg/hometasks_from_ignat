import React, {useState} from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'
import style from './HW3.module.css'


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}


// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        const newUser = {_id: v1(), name}
        const usersCopy = [...users, newUser]
        setUsers(usersCopy) // need to fix
    }


    return (
        <div>
            <hr />
            <div className={style.title}>homeworks 3</div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}



export default HW3
