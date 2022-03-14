import React, {useState} from 'react'
import {PATH} from "./Pages";
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import IconButton from '@mui/material/IconButton/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


type PropsType = {
    active: boolean
    setActive: (active: boolean)=> void
}

function Header(props: PropsType) {

    const menuActivator = (e:any) => {
        e.preventDefault()
        props.setActive(!props.active)
    }

    const resultClassForBtn = () => {
        return (!props.active ? s.menu : s.menu_active)
    }

    return (
            <div className={resultClassForBtn()}>
                <IconButton sx={{
                    'width': '30px',
                    'height': '30px',
                    'position': 'absolute',
                    'right': '-45px',
                    'top': '15px',
                }} onClick={(e)=>menuActivator(e)}>
                    <MenuIcon />
                </IconButton>

                <div className={s.menu_list}>
                    <NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                    <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
                    <NavLink to={PATH.ERROR}>Somewhere...</NavLink>
                </div>
            </div>
    )
}

export default Header
