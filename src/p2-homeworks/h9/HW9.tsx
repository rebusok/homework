import React, {useState} from "react";
import Clock from "./Clock";
import WrappAcc from "../../p1-main/m1-ui/u1-app/Hoc/layout/wrappAcc/WrappAcc";

function HW9() {

    const [closeProps, setPropsOpen] = useState(true)

    return (
        <WrappAcc title ='homeworks 9' setPropsOpen={setPropsOpen} closeProps={closeProps}>


            {/*should work (должно работать)*/}
            <Clock closeProps={closeProps}/>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}

        </WrappAcc>
    );
}

export default HW9;
