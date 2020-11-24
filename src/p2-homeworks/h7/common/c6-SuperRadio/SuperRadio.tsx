import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from './SuperRadio.module.css';
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption){
            onChangeOption(e.target.value)
            
        }
        if (onChange) {
            onChange(e)
            
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <div className={s.wrapper}  key={name + "-" + i}>
        <label className={ o ===value ? s.super_input : s.checkbox_inp}>            
            <input 
                type={name}
                onChange={onChangeCallback}
                value={o}
                checked={o ===value}
                // name, checked, value, onChange
            />
            
            {o}
        </label>
        </div>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
