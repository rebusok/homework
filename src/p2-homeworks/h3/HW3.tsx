import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import { v1 } from "uuid";
import WrappAcc from "../../p1-main/m1-ui/u1-app/Hoc/layout/wrappAcc/WrappAcc";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}
const defaultUsers:Array<UserType> = [
]

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>(defaultUsers); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newArr = {
            _id: v1(),
            name: name
        }
        setUsers([newArr, ...users]);
        console.log(defaultUsers);// need to fix
    }

    return (
        <WrappAcc title={'Homeworks 3'}>



            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}

        </WrappAcc>
    );
}

export default HW3;
