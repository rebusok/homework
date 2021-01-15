import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import WrappAcc from "../../p1-main/m1-ui/u1-app/Hoc/layout/wrappAcc/WrappAcc";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    // const [dis, setDis] = useState(false)
    const onChangeCallback = (value:[number, number]) => {

        setValue2(value[1])
        setValue1(value[0])
    }
    return (
        <WrappAcc title={'homeworks 11'}>



            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    min={0}
                    max={100}
                    onChangeRange={onChangeCallback}
                    value={[value1, value2]}
                    // disable={dis}
                    // setDis={setDis}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}

        </WrappAcc>
    );
}

export default HW11;
