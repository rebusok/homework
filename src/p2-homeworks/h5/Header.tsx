import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';
function Header() {
    return (
        <div className={s.dropbox_head}>        
            <div className={s.dropbox}> <span className={s.dropbox_btn}>Menu</span>
                <nav className={s.dropbox_list}>
                    <NavLink exact to="/pre-junior" activeClassName={s.active}>Pre-junior</NavLink>  
                    <NavLink to="/junior" activeClassName={s.active}>Junior</NavLink>  
                    <NavLink to="/junior_plus" activeClassName={s.active}>JuniorPlus</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Header;
