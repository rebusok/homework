import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.scss';
import {PATH}  from './Routes';
import BackDrop from "../../p1-main/m1-ui/u1-app/Hoc/navigation/BackDrop/BackDrop";
function Header(props:any) {
    const cls = [
        s.Header
    ]

    if (!props.isOpen){
        cls.push(s.close)
    }
    const clickHandler = () => {
        props.onClose()
    }
    return (
        <React.Fragment>
                <nav className={cls.join(' ')}>
                    <div className={s.wrapper}>
                        <NavLink
                            exact to={PATH.PRE_JUNIOR}
                            activeClassName={s.active}
                            onClick={clickHandler}>Pre-junior</NavLink>
                        <NavLink
                            to={PATH.JUNIOR}
                            activeClassName={s.active}
                            onClick={clickHandler}>Junior</NavLink>
                        <NavLink
                            to={PATH.JUNIOR_PLUS}
                            activeClassName={s.active}
                            onClick={clickHandler}>JuniorPlus</NavLink>
                    </div>
                </nav>
            {props.isOpen ? <BackDrop onClick={props.onClose}/> : null}
        </React.Fragment>
    );
}

export default Header;
