import React, {ChangeEvent, useState} from "react";
import {requestsAPI} from "./RequestsAPI";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

const Request = () => {
    const [value, setValue] = useState<boolean>(false)
    const [textMessage, setTextMessage] = useState<string | null>("")

    const onClickHandler = () => {
         requestsAPI.request(value)
            .then(res => {
                setTextMessage(res.data.errorText)
            })
             .catch(err => {
                 if (err) {
                     console.log(err.response.data.errorText)
                 }
                 setTextMessage("Error")

             })
    }
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }


    return (
        <div>

        <SuperCheckbox
            onChange={onChangeCallback}
            checked={value}
        />


            {/*<input
                type={'checkbox'}

                onChange={onChangeCallback}
            />*/}
            <button onClick={onClickHandler}>
                Click
            </button>
            <div style={{color: "white"}}>
                {textMessage}
            </div>
        </div>


    )

}

export default Request;