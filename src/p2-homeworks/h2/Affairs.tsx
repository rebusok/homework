import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (_id:number) => void
    filter: FilterType
}

function Affairs({data, setFilter, deleteAffairCallback, filter}: AffairsPropsType) {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () =>{ setFilter("all")} // need to fix
    const setHigh = () => {setFilter("high")};
    const setMiddle = () => {setFilter("middle")};
    const setLow = () => {setFilter("low")};

    return (
        <div>
            {mappedAffairs}
            <div className={s.flex_but}>
                <button
                    className={`${s.buttons} ${filter === 'all' ? s.btn_act : ''}` }
                    onClick={setAll}>All</button>
                <button
                    className={`${s.buttons} ${filter === 'high' ? s.btn_act : ''}`}
                    onClick={setHigh}>High</button>
                <button
                    className={`${s.buttons} ${filter === 'middle' ? s.btn_act : ''}`}
                    onClick={setMiddle}>Middle</button>
                <button
                    className={`${s.buttons} ${filter === 'low' ? s.btn_act : ''}`}
                    onClick={setLow}>Low</button>
            </div>

        </div>
    );
}

export default Affairs;
