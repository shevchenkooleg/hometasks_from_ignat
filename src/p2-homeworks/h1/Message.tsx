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
            <div className={style.spacer}></div>
            <div className={style.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
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
