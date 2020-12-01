import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from 'react-router-dom'

type HW5Type = {
    isOpen: boolean
    onClose: () => void
}


function HW5(props:HW5Type) {

    return (
        <React.Fragment>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header
                isOpen={props.isOpen}
                onClose={props.onClose}
            />

            <Routes/>

            </HashRouter>
        </React.Fragment>
    );
}

export default HW5;
