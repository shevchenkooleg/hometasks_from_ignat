import React from 'react'
import {AffairType} from "./HW2";
import style from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix an
    deleteAffairCallback: (_id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const titleColorized = () => {
        switch(props.affair.priority) {
            case 'high':
                return style.hiPriorityTitle
            case 'middle':
                return style.middlePriorityTitle
            case 'low':
                return style.lowPriorityTitle
        }
    }

    return (
        <div className={style.content}>
            <div className={titleColorized()}>{props.affair.name}</div>
            {/*<div className={style.priority}>{props.affair.priority}</div>*/}
            <div>
                <button className={style.delBtn} onClick={deleteCallback}>X</button>
            </div>

        </div>
    )
}

export default Affair
