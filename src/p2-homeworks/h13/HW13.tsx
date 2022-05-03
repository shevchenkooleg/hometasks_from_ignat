import React from 'react';
import {makeTestingRequest, toggleSuccess} from "./bll/requestReduser";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import axios from "axios";



export const HW13 = () => {

    const success = useSelector((state: AppStateType) => state.HW13)

    return (
        <div>
            <hr/>
            <Request success={success.success} makeTestingRequest={makeTestingRequest}/>
            <hr/>
        </div>
    );
};


type RequestPropsType = {
    success: boolean
    makeTestingRequest: (success:boolean)=>void
}

const Request = (props: RequestPropsType) => {

    const dispatch = useDispatch()

    const onCLickHandler = () => {
        console.log('click')
        makeTestingRequest(false)
    }

    const onChangeHandler = () => {

    }

    return (
        <>
            <div>
                <button onClick={onCLickHandler}>Request</button>
            </div>
            <div>
                <input type="checkbox" checked={props.success} onChange={(e)=>{
                    dispatch(toggleSuccess(e.target.checked))}}/>
            </div>
        </>
    )
}
