import React, {useState} from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Pages from './Pages'

function HW5() {

    let [active, setActive] = useState(false)

    return (
        <HashRouter>
            <div>
                <Header active={active} setActive={setActive}/>
                <Pages active={active}/>
            </div>
        </HashRouter>
    )
}

export default HW5
