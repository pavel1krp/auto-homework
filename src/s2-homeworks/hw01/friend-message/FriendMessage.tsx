import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";



// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    alt={props.message.user.name}
                    //
                />
                <div
                    id={'hw1-friend-time-' + props.message.id}
                    className={s.friendTime}
                >
                    <p>{props.message.message.time}</p>
                </div>
            </div>
            <div className={s.friendText}>
                <div
                    id={'hw1-friend-name-' + props.message.id}
                    className={s.friendName}
                >
                    <p>{props.message.user.name}</p>
                </div>
                <pre
                    id={'hw1-friend-text-' + props.message.id}
                    className={s.friendMessageText}
                >
                       <p>{props.message.message.text}</p>
                    </pre>
            </div>
        </div>
    )
}

export default FriendMessage
