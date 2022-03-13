import React from 'react'
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (

            <div className={s.dropdown}>
                <button className={s.dropbtn}>Dropdown</button>
                <div className={s.dropdown_content}>
                    <a href={`/#${PATH.PRE_JUNIOR}`}>Pre-Junior</a>
                    <a href={`/#${PATH.JUNIOR}`}>Junior</a>
                    <a href={`/#${PATH.JUNIOR_PLUS}`}>Junior+</a>
                    <a href={`/#/4`}>Somewhere...</a>
                </div>
            </div>

            // <ul>
            //     <li><a className={s.header} href={`/#${PATH.PRE_JUNIOR}`}>Pre-Junior</a></li>
            //     <li><a className={s.header} href={`/#${PATH.JUNIOR}`}>Junior</a></li>
            //     <li><a className={s.header} href={`/#${PATH.JUNIOR_PLUS}`}>Junior+</a></li>
            //     <li><a className={s.header} href={`/#/4`}>Somewhere...</a></li>
            // </ul>
    )
}

export default Header
