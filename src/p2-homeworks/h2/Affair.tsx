import React from "react";
import {AffairType} from "./HW2";
import s from './Affair.module.css';
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id:number) => void // need to fix any
}

function Affair({affair, deleteAffairCallback}: AffairPropsType) {
    const deleteCallback = () => {deleteAffairCallback(affair._id)};// need to fix

    return (
        <div className={s.head}>
            <span className={s.name}>{affair.name}</span>

            <button className={s.buttons} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
