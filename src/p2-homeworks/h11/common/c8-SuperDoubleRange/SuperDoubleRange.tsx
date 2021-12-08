import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onHandleChange?: (newValue: number | number[]) => void
    value?: [number, number]
    min: number
    max: number
    step: number | null
    disable: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onHandleChange, value,
        min, max, step, disable,
    }
) => {

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
        onHandleChange && onHandleChange(newValue as [number, number])
    };

    return (
        <div style={{width: '300px', display: 'inline-block',}}>

            <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="range-slider"
                min={min}
                max={max}
                step={step}
                disabled={disable}
            />
        </div>
    )
}

export default SuperDoubleRange
