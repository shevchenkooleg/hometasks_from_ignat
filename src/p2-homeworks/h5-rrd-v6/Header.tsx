import React from 'react'
import {PATH} from "./Pages";
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'


function Header() {
    return (

            <div className={s.dropdown}>
                <button className={s.dropbtn}>Dropdown</button>
                <div className={s.dropdown_content}>
                    <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                    <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
                    <NavLink to={PATH.ERROR}>Somewhere...</NavLink>
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
