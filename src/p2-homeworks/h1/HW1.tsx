import React from "react";
import Message from "./Message";
import WrappAcc from '../../p1-main/m1-ui/u1-app/Hoc/layout/wrappAcc/WrappAcc'


export type MessageType = {
    avatar: string
    name: string
    message: string
    time:string
}
const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function HW1() {
    return (
        <WrappAcc title={'homeworks 1'}>
            <div>


                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />


                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeMessage/>*/}

            </div>
        </WrappAcc>

    );
}

export default HW1;
