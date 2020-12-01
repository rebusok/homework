import React, {useState} from "react";
import s from './Layout.module.scss';

import HW5 from "../../../../../p2-homeworks/h5/HW5";
import MenuToggle from "../navigation/MenuToggle";

type LayoutType = {
    children: any
}

const Layout = (props:LayoutType) => {
    const [menu, setMenu] = useState(false)
    const toggleMenuHandler = () => {
        setMenu(!menu)
    }
    const menuCloseHandler = () => {
        setMenu(false)
    }


    return (
        <div className={s.Layout}>
            <HW5
                isOpen={menu}
                onClose={menuCloseHandler}
            />
            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={menu}
            />
        </div>
    )
}

export default Layout;