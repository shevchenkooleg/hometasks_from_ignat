import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './Header'
import Pages from './Pages'

function HW5() {
    return (
        <HashRouter>
            <div>
                <Header/>
                <Pages/>
            </div>
        </HashRouter>
    )
}

export default HW5
