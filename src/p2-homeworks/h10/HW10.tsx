import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import WrappAcc from "../../p1-main/m1-ui/u1-app/Hoc/layout/wrappAcc/WrappAcc";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, loadingReducerTypes} from "./bll/loadingReducer";
import Spinner from "./Spinner/Spinner";
import s from './HW10.module.scss';
function HW10() {


    const dispatch = useDispatch();

    const {loading}:any = useSelector((state:loadingReducerTypes) => state.loading);

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 5000)
    };

    return (
        <WrappAcc title={'homeworks 10'}>


            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Spinner/>
                ) : (
                    <div className={s.content}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }


            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}

        </WrappAcc>
    );
}

export default HW10;
