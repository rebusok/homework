import React from "react";
import {MessageType} from './HW1';
import styleClass from './Message.module.css';






function Message({avatar, name, message, time}:MessageType) {
    return (
        <div className={styleClass.message}>
            <div className={styleClass.chat} key={name}>
                <div className={styleClass.icon}><img src={avatar} alt='icon'/></div>
                <div className={styleClass.header}>
                    <ul >
                        <li className={styleClass.name}>{name}</li>
                        <li>{time}</li>
                    </ul>
                    <div className={styleClass.textChat}>
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
