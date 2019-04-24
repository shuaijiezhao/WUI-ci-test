import React from "react";
import {scopedClassMaker} from "../handlers/classes";

const scm = scopedClassMaker('wui-layout');

const Footer: React.FunctionComponent = (props) => {
    return (
        <div className={scm('footer')}>footer</div>
    )
}

export default Footer;