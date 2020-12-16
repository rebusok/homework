import React from "react";
import s from "./HW12.module.css";

import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import WrappAcc from "../../p1-main/m1-ui/u1-app/Hoc/layout/wrappAcc/WrappAcc";
import {AppStoreType} from "../h10/bll/store";


const themes = ['dark', 'red', 'some'];

function HW12() {

    const {themeColor} = useSelector((state:AppStoreType) => state.theme)
    const dispatch = useDispatch();
    // useDispatch, onChangeCallback
    const onChangeCallback = (option: any) => {
        dispatch({type: "CHANGE_COLOR", payload: option})
    }
    return (
        <WrappAcc title={'homeworks 12'}>
            <div className={s[themeColor]}>
                <hr/>
                <span className={s[themeColor + '-text']}>
                homeworks 12
            </span>
                <SuperRadio
                    name={"radio"}
                    options={themes}
                    value={themeColor}
                    onChangeOption={onChangeCallback}
                />
                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                <hr/>
            </div>
        </WrappAcc>

    );
}

export default HW12;
