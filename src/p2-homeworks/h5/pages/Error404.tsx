import React from "react";
import s from './Error404.module.css';
import { Link } from 'react-router-dom';
import logo from './img_er.png';
function Error404() {
   
    return (
        <div className={s.header}>
            <div>
                <img src={logo} alt={'logo'}></img>
             </div>
            <div className={s.text}>
                <div>404</div>
                <div>Page not found!</div>
                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
                <div>
                    <Link to="/">Return Home</Link>
                </div>
            </div>
            
        </div>
    );
}

export default Error404;
