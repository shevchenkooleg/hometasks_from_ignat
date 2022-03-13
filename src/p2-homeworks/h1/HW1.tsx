import React from 'react'
import Message from './Message'
import img from './icons/imgbin_rayman-raving-rabbids.png'

const messageData = {
    avatar: img,
    name: 'RayMan',
    message: 'What\'s up, dude?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div style={{paddingBottom:'10px'}}>Homework 1</div>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
