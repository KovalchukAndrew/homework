import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from './HW10.module.css'

function HW10() {
    let load = useSelector<AppStoreType, boolean>(state => state.loading.load)
    let dispatch = useDispatch();


    const setLoading = () => {
        dispatch(loadingAC(!load))
        setTimeout(() => {
            dispatch(loadingAC(load))
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {load
                ? (<>
                       {/* <div className={s.spinner}></div>*/}
                        <div className={s.loader}></div>
                </>


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
