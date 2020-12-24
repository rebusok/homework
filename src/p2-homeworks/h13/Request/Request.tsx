import React, {ChangeEvent, useState} from 'react';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import style from './Request.module.scss'
import RequestsApi from "./RequestsAPI";
import icon from './pngegg.png'

const Request = () => {
    const [postSuc, setPostSuc] = useState<boolean>(false);
    const [result, setResult] = useState<string>('');
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setPostSuc(e.currentTarget.checked)

    const testOnClick = async () => {
        await RequestsApi.PostCall(postSuc).then((res) => {
            console.log(res)
            setResult(`${res.data.errorText}`)
        }).catch((err) => console.log(err))

    }

    return (
        <div className={style.cheack}>

            <SuperCheckbox onChange={testOnChange}>Check</SuperCheckbox>

            <SuperButton onClick={testOnClick} red={false}>POST</SuperButton>
            <div className={style.result}>{result !== "" ? <span>{result} <img src={icon} alt={'img'}/> </span> : ''}</div>
        </div>
    );
}
;

export default Request;