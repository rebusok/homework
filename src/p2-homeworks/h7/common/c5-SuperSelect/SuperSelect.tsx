import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import s from './SuperSelect.module.css';
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map(op => (
         <option key={op} value={op} >{op}</option>
    )): []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
       
        if (onChangeOption){
            onChangeOption(e.target.value)
            
        }
        if (onChange) {
            onChange(e)
            
        }
        
    }

    return (
        <div className={s.myBox}>
            <span className={s.myArrow}></span>
            <select onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        </div>
    );
}

export default SuperSelect;
