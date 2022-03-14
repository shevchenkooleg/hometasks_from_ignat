import React from 'react'
import style from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.content}>
            <img className={style.avatar} src={props.avatar} alt="avatar"/>

            <div className={style.angle}></div>

            <div className={style.message}>
                <div className={style.name}>{props.name}</div>
                <div className={style.messageText}>{props.message}</div>
                <div className={style.tmstmp}>{props.time}</div>
            </div>
            <div className={style.spacer}></div>
        </div>
    )
}

export default Message
