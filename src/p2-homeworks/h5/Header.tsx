import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
import {PATH}  from './Routes';
function Header() {
    return (
        <div className={s.dropbox_head}>        
            <div className={s.dropbox}> <span className={s.dropbox_btn}>Menu</span>
                <nav className={s.dropbox_list}>
                    <NavLink exact to={PATH.PRE_JUNIOR} activeClassName={s.active}>Pre-junior</NavLink>  
                    <NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior</NavLink>  
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>JuniorPlus</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Header;
