import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number,
        user: { avatar: string, name: string },
        message: { text: string, time: string },
    }
};

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndTime}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                    alt={props.message.user.name}
                />     <div id={'hw1-time-' + props.message.id} className={s.time}>
                <p>{props.message.message.time}</p>
                {/**/}
            </div>
            </div>
                <div className={s.text_message}>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        <p className={s.name}>{props.message.user.name}</p>
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        <p>{props.message.message.text}</p>
                        {/**/}
                    </pre>
                </div>
                </div>
            </div>

    )
}

export default Message
