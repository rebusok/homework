import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) =>void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    let inputClass = error? s.error :s.good; // need to fix with (?:)



    return (
        <div >
            <div className={s.someClass}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    title='Разрешено использовать только русские и латинские буквы'
                    placeholder='Name'/>

                <button
                    onClick={addUser}
                    className={s.buttons}
                >ADD</button>
                <div className={s.total}><span>{totalUsers}</span></div>

            </div>
            <div className={s.errorWrap}>
                <span>{error}</span>
            </div>
        </div>
    );
}

export default Greeting;
