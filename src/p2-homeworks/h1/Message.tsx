import React from 'react'
import s from './Message.module.css'
import pic from './../../pic/retrowave-sunset-with-palm-silhouette-and-flying-birds-in-the-foreground-summer-time-themed-synthwave-styled-illustration_148087-215.jpg'

export type MessageType = {
    /*avatar: string,*/
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <img src={pic} alt={'avatar'} className={s.avatar}/>
            <div className={s.angle}/>

                <div className={s.content}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.textMessage}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>

        </div>
    )
}

export default Message
