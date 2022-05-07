import React from 'react';
import {makeTestingRequest, toggleSuccess} from "./bll/requestReduser";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";



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

    const errorText = useSelector((state:AppStateType) => state.HW13.errorText)
    const info = useSelector((state:AppStateType) => state.HW13.info)

    const dispatch = useDispatch()

    const onCLickHandler = () => {
        dispatch(makeTestingRequest(props.success))
    }

    const onChangeHandler = () => {

    }

    return (
        <>
            <div>
                <input type="checkbox" checked={props.success} onChange={(e)=>{
                    dispatch(toggleSuccess(e.target.checked))}}/>
            </div>
            <div>
                <button onClick={onCLickHandler}>Request</button>
            </div>
            <div>
                <span>{errorText}</span>
            </div>
            <div>
                <span>{info}</span>
            </div>
        </>
    )
}
