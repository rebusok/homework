import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Clock.module.css';
function Clock() {
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
            const date = new Date();

            setDate(date)
            setShow(true);

        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShowData(true)
    };
    const onMouseLeave = () => {
        setShowData(false)
    };
    const dayss =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const zeroAdd = (num:any):any => {
        if (num < 10) {
           return  '0' + num
        } else {
            return  num
        }
    }

    let hours:any = zeroAdd(date?.getHours()),
        minutes:any = zeroAdd(date?.getMinutes()),
        seconds:any = zeroAdd(date?.getSeconds()),
        days:any = date?.getDay(),
        ears:any = date?.getFullYear(),
        month:any = zeroAdd(date?.getMonth()),
        nbrDay:any = date?.getDate();

    if (date?.getMonth()) {
       month += 1
    }

console.log(ears);
    console.log(nbrDay);
    const stringTime = `${hours}:${minutes}:${seconds}`; // fix with date
    const stringDate = ` ${ears}-${month}-${nbrDay} : ${dayss[days]}`; // fix with date
    console.log(stringTime)
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



            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
