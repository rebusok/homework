import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css';



type ClockType = {
    closeProps: boolean
}

function Clock(props:ClockType) {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);
    const [showData, setShowData] = useState<boolean>(false);
    const stop = () => {
        clearInterval(timerId);
    }

    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            const date:Date  = new Date();

            setDate(date)
            setShow(true);
        }, 1000);
        setTimerId(id);
    }

    if(props.closeProps){
        clearInterval(timerId);
    }
    const hide = () => {
        setShow(false);
        clearInterval(timerId);

    }

    const onMouseEnter = () => {
        setShowData(true)
    };
    const onMouseLeave = () => {
        setShowData(false)
    };
    const daysWord =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    const zeroAdd = (num:any) => {

        if (num < 10) {
           return  '0' + num
        } else {
            return  num
        }
    }

    let hours = zeroAdd((date?.getHours() || 0)),
        minutes:string = zeroAdd((date?.getMinutes() || 0)),
        seconds:string = zeroAdd((date?.getSeconds()|| 0)),
        days:number,
        ears:number| undefined = date?.getFullYear(),
        month:string  = zeroAdd((date?.getMonth() || 0)),
        nbrDay:number| undefined = date?.getDate();


    if (date?.getMonth()) {
       month += 1
    }
    if (date?.getDay()){
        days = date?.getDay()
    } else {
        days = 0
    }


    const stringTime = `${hours}:${minutes}:${seconds}`; // fix with date
    const stringDate = ` ${ears}-${month}-${nbrDay} : ${daysWord[days]}`; // fix with date

    const finalClassName = `${s.wrapper}  ${show ?  s.displayOn : s.displayOff}`
    return (
        <div>
            <div className={finalClassName}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={s.clock}>
                    {show && (
                        <div className={s.time}>
                            {stringTime}
                        </div>
                    )}
                    {showData && (
                        <div className={s.date}>
                            {stringDate}
                        </div>
                    )}
                </div>
            </div>



            <div  className={s.main}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
                <SuperButton onClick={hide}>hide</SuperButton>
            </div>

        </div>
    );
}

export default Clock;
