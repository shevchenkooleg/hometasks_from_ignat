import React from 'react'
import Message from './Message'
import img from './icons/imgbin_rayman-raving-rabbids.png'

const messageData = {
    avatar: img,
    name: 'RayMan',
    // message: 'What\'s up, dude?',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ' +
        'commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id' +
        ' est laborum.',
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
