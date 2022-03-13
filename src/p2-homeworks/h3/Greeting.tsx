import React, {ChangeEvent, KeyboardEvent} from 'react'
import style from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onPressKey: (e: KeyboardEvent<HTMLInputElement>) => void
    buttonDisabler:boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onPressKey,buttonDisabler} // деструктуризация пропсов
) => {
    const inputClass = error ? style.error : style.data // need to fix with (?:)

    return (
        <div className={style.content}>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onPressKey}/>

            <button className={!buttonDisabler ? style.enable : ''} disabled={buttonDisabler} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
