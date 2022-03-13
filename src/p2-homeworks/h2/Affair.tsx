import React, {useState} from 'react'
import {AffairType} from "./HW2";
import style from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix an
    deleteAffairCallback: (_id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    let [crossOut, setCrossOut] = useState(false)

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
            <div className={`title ${titleColorized()} ${crossOut ? style.crossOut : ''}`}>{props.affair.name}</div>
            <div>
                <button
                    className={style.delBtn}
                    onClick={deleteCallback}
                    onMouseOver={()=>{setCrossOut(true)}}
                    onMouseLeave={()=>{setCrossOut(false)}}
                >X</button>
            </div>

        </div>
    )
}

export default Affair
