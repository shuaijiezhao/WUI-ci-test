import React from "react";
import {scopedClassMaker} from "../handlers/classes";

const scm = scopedClassMaker('wui-layout');

const Aside: React.FunctionComponent = (props) => {
    return (
        <div className={scm('aside')}>aside</div>
    )
}

export default Aside;