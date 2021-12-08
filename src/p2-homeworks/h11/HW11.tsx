import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {TextField} from "@material-ui/core";

function HW11() {
    const [value, setValue] = useState<[number, number]>([20, 70])
    const [min, setMin] = useState<number>(10)
    const [max, setMax] = useState<number>(90)
    const [step, setStep] = useState<number | null>(5)
    const [disabled, setDisabled] = useState<boolean>(false)


    const onChangeRange = (newValue: number) => {
        setValue([newValue, value[1]])
    }

    const onHandleChange = (newValue: number | number[]) => {
        setValue(newValue as [number, number]);
    };

    const spanStyle = {
        display: 'inline-block',
        width: '30px',
        marginLeft: '10px'
    }

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(+e.currentTarget.value)
    }
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }

    return (
        <div>
            <hr/>
            <div style={{paddingLeft: '15px'}}>
                homeworks 11
                <div>
                    <span style={spanStyle}>{value[0]}</span>
                    <SuperRange
                        onChangeRange={onChangeRange}
                        value={value[0]}
                    />
                </div>

                <div>
                    <span style={spanStyle}>{value[0]}</span>
                    <SuperDoubleRange
                        value={value}
                        onHandleChange={onHandleChange}
                        min={min}
                        max={max}
                        step={step}
                        disable={disabled}

                    />
                    <span style={spanStyle}>{value[1]}</span>
                    <TextField
                        style={{width: '120px'}}
                        type='number'
                        label="min value"
                        variant="filled"
                        InputProps={{
                            inputProps: {
                                max: 99, min: 0
                            }
                        }}
                        value={min}
                        onChange={onChangeMin}
                    />
                    <TextField
                        style={{width: '120px'}}
                        type='number'
                        label="max value"
                        variant="filled"
                        InputProps={{
                            inputProps: {
                                max: 100, min: 1
                            }
                        }}
                        value={max}
                        onChange={onChangeMax}
                    />

                </div>
            </div>

            <hr/>

        </div>
    )
}
export default HW11
