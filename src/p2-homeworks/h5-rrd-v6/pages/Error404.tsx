import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.content}>
            <div className={s.error}>
                <div>This page does not exist.</div>
                <div>...or does it?</div>
                <div className={s.link}>Try the <a className={s.s404} href="/pre-junior">homepage</a>.</div>
            </div>
            <img src="https://bench.co/gifs/bigfoot.gif" alt=""/>
            <div className={s.empty}></div>
        </div>
    )
}

export default Error404
