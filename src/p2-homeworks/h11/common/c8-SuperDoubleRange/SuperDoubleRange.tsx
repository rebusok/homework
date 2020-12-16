import React from "react";
import  { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    // disable:boolean
    // setDis:(value:boolean) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
        min, max,


    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (value: any):any => {
        console.log(value)

        onChangeRange && onChangeRange(value);
        // if(value[0] >= value[1]){
        //     setDis(true)
        // } else{
        //     setDis(false)
        // }
    }


    return (
        <>
            {/*<input*/}
            {/*    type={"range"}*/}
            {/*    // onChange={onChangeRange}*/}


            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
            <Range
                onChange={onChangeCallback}
                min={min}
                max={max}
                value={value}
                // disabled={disable}
                allowCross={false}
            />
        </>
    );
}

export default SuperDoubleRange;
