import React from "react";
import {scopedClassMaker} from "../handlers/classes";

const scm = scopedClassMaker('wui-layout');

const Content: React.FunctionComponent = (props) => {
    return (
        <div className={scm('content')}>content</div>
    )
}

export default Content;