import React, {useState} from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Pages from './Pages'

function HW5() {

    let [sideBarActive, setSideBarActive] = useState(false)

    return (
        <HashRouter>
            <div>
                <Header active={sideBarActive} setActive={setSideBarActive}/>
                <Pages active={sideBarActive}/>
            </div>
        </HashRouter>
    )
}

export default HW5
