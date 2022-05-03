import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {HW10ReducerType, loadingAC, SelectorHW10State} from './bll/loadingReducer';
import Preloader from "./Preloader/Preloader";

function HW10() {
    const {isLoading} = useSelector(SelectorHW10State)
    const dispatch = useDispatch<Dispatch<HW10ReducerType>>()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{dispatch(loadingAC(false))},2000)
        console.log(isLoading)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><Preloader/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
