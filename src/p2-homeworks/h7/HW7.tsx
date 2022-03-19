import React, {ChangeEvent, useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[0])

    const onSelectValueChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.currentTarget.value
        onChangeOption(newValue)
    }

    const onRadioValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        onChangeOption(newValue)
    }

    return (
        <div>
            <hr/>
            <div style={{paddingBottom:'10px'}}>Homework 7</div>


            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChange={onSelectValueChangeHandler}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChange={onRadioValueChangeHandler}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
