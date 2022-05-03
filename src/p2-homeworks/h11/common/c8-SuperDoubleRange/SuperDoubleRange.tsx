import { Box, Slider } from '@mui/material'
import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // const onChangeHandler = (e: React.ChangeEvent<{}>, value: (number | number[])) => {
    //     onChangeRange && onChangeRange(value as number)
    // }
    // сделать самому, можно подключать библиотеки
    return (
        <Box sx={{ width: 150 , margin: '0 auto'}}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={(e, value)=>{
                    if (Array.isArray(value)) {
                        if (e.target !== null) (onChangeRange([value[0], value[1]]))
                    }
                }
            }
                // onChange={onChangeHandler}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    )
}

export default SuperDoubleRange


