import React from "react";
import s from './Error404.module.css';
import { Link } from 'react-router-dom';
function Error404() {
    const path = 'http://img0.reactor.cc/pics/post/full/%D0%A1%D0%B8%D0%BC%D0%BF%D1%81%D0%BE%D0%BD%D1%8B-%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-%D0%B3%D0%BE%D0%BC%D0%B5%D1%80-%D1%81%D0%B8%D0%BC%D0%BF%D1%81%D0%BE%D0%BD-%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%8B-628678.png';
    return (
        <div className={s.header}>
            <div>
                <img src={path} alt={path}></img>
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
