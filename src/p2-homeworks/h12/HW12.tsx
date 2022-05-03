import React, {ChangeEvent} from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./HW12.module.css";
import {changeColorTheme, SelectorHW12State, ThemeReducerType, ThemeType} from "./bll/themeReducer";
import {Dispatch} from "redux";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'green'];

function HW12() {
    const {theme} = useSelector(SelectorHW12State)

    const dispatch = useDispatch<Dispatch<ThemeReducerType>>()

    const onSelectChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const newTheme = e.currentTarget.value
        dispatch(changeColorTheme(newTheme as ThemeType))
    }

    const onRadioChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const newTheme = e.currentTarget.value
        dispatch(changeColorTheme(newTheme as ThemeType))
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <SuperSelect onChange={onSelectChangeCallback} value={theme} options={themes}/>
            </div>
            <div>
                <SuperRadio name={'Theme'} options={themes} value={theme} onChange={onRadioChangeCallback}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
