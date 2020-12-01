import React, { useState } from "react";
import s from './wrappAcc.module.scss';

type WrappAccType = {
    title:string
    setPropsOpen?: (value:boolean)=> void
    closeProps?: boolean
    children?: any
}

const WrappAcc = (props:WrappAccType) => {
    const [close, setOpen] = useState(true)
    const onToggleHandler = () => {
        setOpen(!close)
        if(props.setPropsOpen){
            props.setPropsOpen(!props.closeProps)
        }
    }

    // const cls = [
    //     s.content
    // ]
    //
    // if(open){
    //     cls.push(s.open)
    // } else{
    //     cls.push(s.close)
    // }
    return (
        <React.Fragment>
            <div className={s.title} onClick={onToggleHandler} key={props.title}>{props.title}</div>

            <div className={close ? s.close : s.open}>{props.children}</div>
        </React.Fragment>
    )
}

export  default WrappAcc;