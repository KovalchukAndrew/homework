import React from 'react'
import Message from './Message'

const messageData = {
    /*avatar: 'https://lh3.googleusercontent.com/proxy/0t6YAfILvzx8s-7NjWfsc9BgCnuFbh49GdW_lEIV2pfm1kY0-g2PmO3YMLY2xOJxxudzxtqEXHobyC7tQUw9DMv0aprKDZRiS5PGJ4XSc-MBKeaUnLF8jejMyr5ztGUVDA',*/
    name: 'Some Name',
    message: 'my message',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                /*avatar={messageData.avatar}*/
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
