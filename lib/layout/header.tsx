import React from "react";
import {scopedClassMaker} from "../handlers/classes";

const scm = scopedClassMaker('wui-layout');

const Header: React.FunctionComponent = (props) => {
    return (
        <div className={scm('header')}>header</div>
    )
}

export default Header;