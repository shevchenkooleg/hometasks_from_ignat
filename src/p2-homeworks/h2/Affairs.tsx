import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: string
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={style.content}>
            <div className={style.affairs}>
                {mappedAffairs}
            </div>

            <div className={style.buttons}>
                <button className={props.filter ==='all' ? style.Active : style.Btn} onClick={setAll}>All</button>
                <button className={props.filter ==='high' ? style.Active : style.Btn} onClick={setHigh}>High</button>
                <button className={props.filter ==='middle' ? style.ActiveM : style.BtnM} onClick={setMiddle}>Middle</button>
                <button className={props.filter ==='low' ? style.Active : style.Btn} onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
