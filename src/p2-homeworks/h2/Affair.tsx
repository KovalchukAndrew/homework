import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (affairID: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix

    return (
        <div>
            {props.affair.name + " " + props.affair.priority}
            <button className={s.remove} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
